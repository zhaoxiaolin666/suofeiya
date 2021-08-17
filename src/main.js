import Vue from 'vue'
import App from './App.vue'
import router from './router'
//seo开始
import MetaInfo from 'vue-meta-info'
Vue.use(MetaInfo)
//seo结束
//css重置文件
import 'normalize.css/normalize.css'
//swiper
import 'swiper/dist/css/swiper.css';
// 引入 flexible 用于设置 rem 基准值
import 'lib-flexible/flexible.js'
//es6
import Es6Promise from 'es6-promise'
require('es6-promise').polyfill()
Es6Promise.polyfill()
//消息列表里无缝滚动组件
import VueSeamlessScroll from 'vue-seamless-scroll'
Vue.use(VueSeamlessScroll)
//elementUI
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element)
Vue.config.productionTip = false
Vue.prototype.$baseUrl = 'https://gdgjsxy.com/public'
//进入页面，页面回到顶部
router.afterEach((to, from, next) => {
	window.scrollTo(0, 0)
})

router.beforeEach((to, from, next) => {
	if (to.meta.content) {
		let head = document.getElementsByTagName('head');
		let meta = document.createElement('meta');
		document.querySelector('meta[name="keywords"]').setAttribute('content', to.meta.content.keywords)
		document.querySelector('meta[name="description"]').setAttribute('content', to.meta.content.description)
		meta.content = to.meta.content;
		head[0].appendChild(meta)
	}
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	next()
});
new Vue({
	router,
	render: h => h(App),
	//seo模块开始
	mounted() {
		document.dispatchEvent(new Event('render-event'))
	}
	//seo模块结束
}).$mount('#app')