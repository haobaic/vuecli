// 'use strict'
const TerserPlugin = require('terser-webpack-plugin'); //去除console
module.exports = {
	optimization: {
		minimizer: [
			new TerserPlugin({
				sourceMap: true, // Must be set to true if using source-maps in production
				terserOptions: {
					compress: {
						drop_console: true,
					},
				},
			}),
		],
		//公共代码抽离
		splitChunks: {
			// chunks: 'async',
			// minSize:1,
			// minRemainingSize: 0,
			maxSize: 0,
			minChunks: 1,
			maxAsyncRequests: 6,
			maxInitialRequests: 4,
			automaticNameDelimiter: '~',
			automaticNameMaxLength: 30,
			cacheGroups: {
				// // elementUI选项暂时未使用到（参考elementUI中的配置）
				// elementUI: {
				// 	name: 'chunk-elementUI', // 单独将 elementUI 拆包
				// 	priority: 21, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
				// 	test: /[\\/]node_modules[\\/]element-ui[\\/]/
				// },
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		}
	},
}
