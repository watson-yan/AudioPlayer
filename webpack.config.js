var webpack = require('webpack')
var path = require('path')

module.exports = {
   // 插件项
   plugins: [],

   // 页面入口文件配置
   entry: './entry.js',

   // 输出文件配置
   output: {
       path: path.resolve(__dirname, './dist'),
       filename: 'index.js'
   },

   // 加载器配置
   module: {
       rules: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.scss$/, loader: '!style-loader!css-loader!sass-loader'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            { test: /\.vue$/, loader: 'vue-loader'},
            { test: /\.js$/, exclude: /node_modules/,  loader: 'babel-loader'},
       ]   
   }
}