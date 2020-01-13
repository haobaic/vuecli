'use strict'
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlMin=require('./webpack.html.min.js');
const setCdn=require('./webpack.cdn.js');
module.exports = {
	//页面插件配置
	plugins: [
		new CleanWebpackPlugin(),
		// 请确保引入这个插件！
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: './assets/css/[name][hash].min.css'
		}),
		// new ExtractTextPlugin('./css/[name][hash].min.css'),
		new HtmlWebpackPlugin({
			title:"element 模板",
			template: "./public/index.ejs",
			filename: 'index.html',
			favicon: './public/favicon.ico',
			inject: true, //js插入的位置，true/'head'/'body'/false
			minify: htmlMin.Htmlminify,
			// 顺序按数组索引加载
			cdn:setCdn.cdn
		})
	],
}
