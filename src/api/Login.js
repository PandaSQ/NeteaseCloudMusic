import request from '@/utils/request' //把网络请求工具拿过来

//二维码 key 生成接口
export const generateKey = (params) => request({
	url:'/login/qr/key',
	 withCredentials: true,
	 params
})

 // 二维码生成接口
 export const generatQR = (params) => request({
	 url:'/login/qr/create',
	  withCredentials: true,
	 params
 })
 
 //二维码检测扫码状态接口
 export const checkQR = (params) => request({
	 url:'/login/qr/check',
	  withCredentials: true,
	 params
 })
 
 //获取登录状态
 export const getLoginStatus = (params) => request({
 	 url:'/login/status',
 	  withCredentials: true,
 	 params
 })
 
 //退出登录
 export const logout = (params) => request({
 	 url:'/logout',
 	  withCredentials: true,
 	 params
 })