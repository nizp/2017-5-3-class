const path = require('path');
//Css分离
const Css = require("extract-text-webpack-plugin");
//HTML分离模板
var Html = require('html-webpack-plugin');
//webpack使用hot
const webpack = require('webpack');
//自动打开浏览器
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
//禁用css分离模块
let cssExtract = new Css({
	filename: '[name].css',
	disable: true
});

module.exports = {
  
  entry:{
    app:'./app'
  },
  
  output:{
    filename:'[name].js',
    path:path.resolve(__dirname,'build/src'),
    publicPath:'/'
  },
  
  module:{
    
    rules:[
      {
        test:/\.js$/,
        use:{
           loader: 'babel-loader',
           options: {
             presets: ['env']
           }
        }
      },
      {
        test:/\.css$/,
        use:Css.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
    
  },
  
  plugins:[
    cssExtract,
    new Html({
      filename: 'index.html',
      template: './1_.html'
    }),
    new OpenBrowserPlugin({ url: 'http://localhost:3000' }),
    new webpack.HotModuleReplacementPlugin()
    
  ],
  //启用虚拟服务器
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname),
  	publicPath:'/',
    compress: true,
    port: 3000
  }
}

