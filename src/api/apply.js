import request from '@/utils/request'
export default {
    //获取资料
    programAdd(params) {
        return request({
            url: `/api/index/program/add`,
            method: 'post',
            data: params,
            headers: 2
        })
    }
}