
import request from '@/utils/request' //把网络请求工具拿过来

//轮播图
export const rotation = () => request({
	url:'/banner',
})

//推荐歌单
export const recommendPlaylist = params => request({
	url:'/personalized',
	params
})

//推荐音乐
export const recommendMusic = params => request({
	url:'/personalized/newsong',
	params
})

//播客
export const podcast = params => request({
	url:'/record/recent/dj',
	params
})