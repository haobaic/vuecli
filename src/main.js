import '@babel/polyfill'
import Vue from 'vue'
import App from "./app.vue"
import router from './router/index.js'
import '@assets/css/reset.css';
import ajax from '@api/axios.js'
import './plugins/element.js'
// 设置全局
Vue.prototype.$ajax=ajax
Vue.config.productionTip = false
new Vue({
	router,
  render: h => h(App)
}).$mount('#box')