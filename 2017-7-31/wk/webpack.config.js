const path = require('path');
const webpack = require('webpack');
const ETWP = require('extract-text-webpack-plugin');//css分离
const html = require('html-webpack-plugin');//html模板
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

let cssExtract = new ETWP({
	filename: '[name].css',
	disable: true
});

module.exports = {
	
	entry:{
		app:'./app'
	},
	output:{
		filename:'[name].js',
		path:path.resolve(__dirname,'build'),
		publicPath: '/'
	},
	
	module:{
		
		rules:[
			{
				test:/\.js$/,
				use:'babel-loader'
			},
			
			{
				test:/\.css$/,
				use:cssExtract.extract({
					fallback: "style-loader",
          			use: ["css-loader"]
				})
				
//				[
//		          { loader: "style-loader" },
//		          { loader: "css-loader" }
//		        ]
			}
			
		]
	},
	plugins:[
		cssExtract
		,
		new html({
			filename:'1.html',
			template:'./index.html'
		}),
		new OpenBrowserPlugin({url: 'http://localhost:3000'}),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
	    hot: true, // 告诉 dev-server 我们在使用 HMR
	    contentBase: path.resolve(__dirname),
	    publicPath: '/',
	    port: 3000
	  }
}

