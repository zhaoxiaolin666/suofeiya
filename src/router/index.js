import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [{
    path: '/',
    name: '/index',
    component: () => import("@/views/index.vue"),
    meta: {
        title: "首页|索菲亚大学",
        content: {
            keywords: '',
            description: ""
        }
    }
}, ]
const router = new VueRouter({
    //seo模块开始
    mode: 'history',
    //seo模块结束
    routes
})

export default router