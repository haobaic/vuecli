var path = require('path') //node系统模块
const setServer = require('./config/webpack.server.js');
const setPlugins = require('./config/webpack.plugins.js');
const setConf = require('./config/webpack.conf.js');
const setModule = require('./config/webpack.module.js');
const setCdn=require('./config/webpack.cdn.js');
function resolve(dir) {
	return path.join(__dirname, dir);
}
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//判断开发环境  
const Pattern=process.env.npm_lifecycle_event;
//判断是否打包
const isProduction =  Pattern=== "build";
module.exports = {
	entry: './src/main.js', //入口文件,
	mode: !isProduction ? 'development' : 'production', // 压缩模式
	output: { //输出配置
		publicPath: isProduction ? "./" : '/', //静态资源配置
		filename: 'js/[name]-[hash].js', //输出名字配置【name】为原来的名字
		chunkFilename: 'js/[name].bundle.js',
		path: path.resolve(__dirname, 'dist') //输出的路径
	},
	//cdn资源
	externals:setCdn.externals,
	devServer:setServer.devServer,
	plugins: setPlugins.plugins,
	//路径映射
	resolve: { //引入vue.js
		extensions: ['.vue', '.js'],
		alias: {
			'vue$': 'vue/dist/vue.js',
			'@': path.resolve("src"),
			'@assets': path.resolve('./src/assets'),
			'@api': path.resolve('./src/api')
		}
	},
	watch: true, // 开启监听文件更改，自动刷新
	watchOptions: {
		ignored: /node_modules/, //忽略不用监听变更的目录
		aggregateTimeout: 500, //防止重复保存频繁重新编译,500毫米内重复保存不打包
		poll: 1000 //每秒询问的文件变更的次数
	},
	optimization: setConf.optimization,
	module:setModule.module
}
//判断是否打开分析页面
const report= Pattern==="report";
if(report){
	module.exports.plugins.push(new BundleAnalyzerPlugin());
}