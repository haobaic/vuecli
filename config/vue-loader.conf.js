// 'use strict'
var productionSourceMap= true;
var cacheBusting=true;
var cssSourceMap=true;
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? productionSourceMap
  : cssSourceMap

module.exports = {
  cssSourceMap: sourceMapEnabled,
  cacheBusting: cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
