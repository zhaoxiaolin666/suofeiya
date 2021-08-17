import axios from 'axios'
import { Loading, Message } from 'element-ui';
import router from '../router'

const loading = {
    loadingInstance: null, // Loading 实例
    // 打开加载
    open: function () {
        // 创建实例,而且会打开加载 窗口
        if (this.loadingInstance === null) {
            // 如果实例 为空，则创建
            this.loadingInstance = Loading.service({
                target: '.main',
                text: '拼命加载中...',
                background: 'rgba(0, 0, 0, 0.5)'
            })
        }
    },
    // 关闭加载
    close: function () {
        // 不为空时, 则关闭加载窗口
        if (this.loadingInstance !== null) {
            this.loadingInstance.close()
        }
        this.loadingInstance = null
    }
}
const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})
// 请求拦截器
request.interceptors.request.use(config => {
    //1.验证token 2.user登录 3.不需要验证token
    switch (config.headers) {
        case 1:
            config.headers = {
                'Content-Type': 'application/json;charset=UTF-8',
                'user-token': 'Bearer ' + localStorage.getItem("token")
            }
            break;

        case 2:
            config.headers = {
                'Content-Type': 'application/json;charset=UTF-8'
            }
            break;
    }
    return config
}, error => {
    // 关闭加载窗口
    loading.close()
    console.log('请求出现异常')
    // 出现异常
    return Promise.reject(error);
})
// 响应拦截器
request.interceptors.response.use(response => {
    // 关闭加载窗口
    loading.close()
    // 后台正常响应的状态，如果不是 2000， 说明后台处理有问题     
    if (response.status === 200) {
        return Promise.resolve(response);
    } else {
        Message({
            message: '系统异常',
            type: 'warning',
            duration: 5 * 1000
        })
        return Promise.reject(response);
    }


}, error => {
    if (error.response) {
        let token = null
        console.log('errorCode' + error.response.data.code)
        switch (error.response.data.code) {
            case 400:
                token = localStorage.getItem('token')
                if (token) {
                    Message({
                        message: error.response.data.message,
                        duration: 1000,
                        type: 'error',
                    });
                    //清除token
                    localStorage.removeItem('token')
                    //清除用户信息
                    localStorage.removeItem('userInfo')
                } else { //匿名用户权限不足
                    Message({
                        message: error.response.data.message,
                        duration: 1000,
                        type: 'error',
                    });
                }

                break;
            case 403:
                token = localStorage.getItem('token')
                if (token) {
                    Message({
                        message: '登录过期，请重新登录',
                        duration: 1000,
                        type: 'error',
                    });
                    //清除token
                    localStorage.removeItem('token')
                    //清除用户信息
                    localStorage.removeItem('userInfo')
                } else { //匿名用户权限不足
                    Message({
                        message: error.response.data.message,
                        duration: 1000,
                        type: 'error',
                    });
                }
                break
            // 其他错误，直接抛出错误提示
            default:
                Message({
                    message: error.response.data.message,
                    duration: 1500,
                    type: 'error',
                });

                break;
        }

    }

    loading.close()
    return Promise.reject(error);
})
export default request // 导出自定义创建 axios 对象