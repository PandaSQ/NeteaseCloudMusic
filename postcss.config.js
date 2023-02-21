module.exports = {
	plugins : {
		'postcss-pxtorem': {
			//把所有的元素的px转换成rem
			//rootvalue：设置转换px的基准值
			rootvalue : 16,
			propList: ['*']
		}
	}
}