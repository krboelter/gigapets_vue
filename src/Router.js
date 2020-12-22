import Vue from 'vue'
import Router from 'vue-router'
// component imports
import Home from './components/Home.vue'
import Login from './components/Login.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		}
	]
})