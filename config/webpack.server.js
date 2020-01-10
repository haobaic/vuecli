// 'use strict'
module.exports = {
	//域名配置
	devServer: {
		contentBase: "./dist", //本地服务路径
		overlay: true, //报错显示到浏览器
		inline: true, //实时刷新
		port: 8070, //端口号
		open: false, //是否自动打开页面
		hot: true, //热替换
		proxy: {
			'/api': {
				target: 'https://cnodejs.org',
				secure: false,
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/api/v1' //需要rewrite重写
				}
			},
		},
		historyApiFallback: true //刷新页面不报错
	}
}