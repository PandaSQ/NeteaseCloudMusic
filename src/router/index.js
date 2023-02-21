import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import Home from "@/pages/Home/index.vue"
import RecommendMusic from '@/pages/RecommendMusic/index.vue' 

const routes  = [
	{
		path:'/',
		redirect:'/home'
	},
	
	{
		path:"/home",
		component:Home,
		redirect:'/home/recommendmusic',
		children : [
			{
				path:"recommendmusic",
				component:RecommendMusic
			}
		]
	},
	
]

const router = new VueRouter({
	routes
})

export default router