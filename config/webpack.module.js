// 'use strict'
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const vueLoaderConfig = require('./vue-loader.conf')
var path = require('path') //node系统模块
function assetsPath(_path) {
	return path.posix.join('assets', _path)
}
module.exports = {
	module: {
		rules: [{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "vue-style-loader",
					use: [{
						loader: 'css-loader',
					}],
					publicPath: "../" //背景图路径
				})
			},
			{
			  test: /\.sass$/,
			  use: [
			    'vue-style-loader',
			    'css-loader',
			    {
			      loader: 'sass-loader',
			      options: {
			        indentedSyntax: true,
			        // sass-loader version >= 8
			        sassOptions: {
			          indentedSyntax: true
			        }
			      }
			    }
			  ]
			},
			{
			  test: /\.less$/,
			  use: [
			    'vue-style-loader',
			    'css-loader',
			    'less-loader'
			  ]
			},
			{
			  test: /\.styl(us)?$/,
			  use: [
			    'vue-style-loader',
			    'css-loader',
			    'stylus-loader'
			  ]
			},
			{
				test: /\.html$/, //正则 所有的html
				use: [{
					loader: "html-loader", //渲染，压缩
					options: {
						attrs: [':data-src'],
						minimize: true,
						removeComments: false,
						collapseWhitespace: false
					}
				}]
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: { //如果有这个设置则不用再添加.babelrc文件进行配置
					"babelrc": false, // 不采用.babelrc的配置
					"plugins": [
						"babel-plugin-syntax-dynamic-import"
						
					]
				},
				exclude: file => (
					/node_modules/.test(file) &&
					!/\.vue\.js/.test(file)
				)
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					esModule: false,
					name: assetsPath('images/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: assetsPath('media/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: assetsPath('fonts/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.vue$/, //压缩vue
				use: [{
					loader: "vue-loader", //压缩vue的loader
					options: vueLoaderConfig
				}],
				exclude: '/node_modules/' // 排除压缩的文件
			}
		]
	}
}
