import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index.vue'
Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/about',
		name: 'about',
		component: () => import( /* webpackChunkName: "about" */ '../views/about.vue')
	}
]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior(to, from, savedPosition) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({
					x: 0,
					y: 0
				})
			}, 500)
		})
	},
})

export default router
