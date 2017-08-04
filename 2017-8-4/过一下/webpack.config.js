const path = require('path');
const Css = require('extract-text-webpack-plugin');
const Html = require('html-webpack-plugin');
const Open = require('open-browser-webpack-plugin');
const webpack = require('webpack');

let cssExtract = new Css({
	filename: '[name].css',
	disable: true
});

module.exports = {
	
	entry:{
		ppa:'./app'
	},
	
	output:{
		filename:'[name].js',
		path:path.resolve(__dirname,'build'),
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
		        test: /\.css$/,
		        use: Css.extract({
		          fallback: "style-loader",
		          use: "css-loader"
		        })
		    }
			
		]
	},
	plugins: [
	    cssExtract,
	    new Html({
	      filename: 'index.html',
	      template: './index.html'
	    }),
	    new Open({url: 'http://localhost:3000'}),
	    new webpack.HotModuleReplacementPlugin() // 启用 HMR
	],
	
	devServer: {
	  publicPath:'/',
	  compress: true,
	  hot:true,
	  port: 3000
	}
	
	
}
