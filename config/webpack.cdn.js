'use strict'
module.exports = {
	//忽略的资源
	externals: {
		// "vue": "Vue",
		// 'vue-router': 'VueRouter',
	},
	//定义 CDN 路径，
	//这里采用https://www.jsdelivr.com/?query=author%3A%20vuejs 的 cdn 
	cdn: {
		css: [],
		js: [
			// 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js',
			// 'https://cdn.jsdelivr.net/npm/vue-router@3.1.3/dist/vue-router.min.js'
		]
	}
}
