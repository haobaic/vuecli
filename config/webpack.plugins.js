'use strict'
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const setCdn=require('./webpack.cdn.js');
module.exports = {
	//页面插件配置
	plugins: [
		// 请确保引入这个插件！
		new VueLoaderPlugin(),
		new CleanWebpackPlugin(),
		// new ExtractTextPlugin('./css/[name][hash].min.css'),
		new MiniCssExtractPlugin({
			filename: './assets/css/[name][hash].min.css'
		}),
		new HtmlWebpackPlugin({
			template: "./public/index.ejs",
			filename: 'index.html',
			title: 'webpack模板',
			favicon: './public/favicon.ico',
			inject: true, //js插入的位置，true/'head'/'body'/false
			minify: {
				removeAttributeQuotes: true, //去除引号
				removeComments: true, //去除注释
				removeEmptyAttributes: true, //去除空属性
				collapseWhitespace: true //去除空格
			},
			// 顺序按数组索引加载
			cdn:setCdn.cdn
		})
	],
}
