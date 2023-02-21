//网络请求的方法

import axios from 'axios'

export default axios.create({//自定义axios对象
	baseURL:"http://localhost:3000"
}) 
