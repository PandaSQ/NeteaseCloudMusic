//统一管理请求

import {recommendPlaylist,recommendMusic,rotation,podcast} from '@/api/Home'
import {generatQR,generateKey,checkQR,getLoginStatus,logout} from '@/api/Login'

// 轮播图
export const rotationAPI = rotation 

//推荐歌单
export const recommendPlaylistAPI = recommendPlaylist

//推荐新音乐
export const recommendMusicAPI = recommendMusic
  
//播客
export const podcastAPI = podcast

// 二维码 key 生成接口
export const generateKeyAPI = generateKey

//生成二维码
export const generatQRAPI = generatQR 

//二维码检测扫码状态接口
export const checkQRAPI = checkQR

//获取登录状态
export const getLoginStatusAPI =getLoginStatus

export const logoutAPI = logout