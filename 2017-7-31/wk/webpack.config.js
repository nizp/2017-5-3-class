const path = require('path');
const css = require('extract-text-webpack-plugin');//css分离
const html = require('html-webpack-plugin');//html模板

module.exports = {
	
	entry:{
		app:'./app'
	},
	output:{
		filename:'[name].js',
		path:path.resolve(__dirname,'build')
	},
	
	module:{
		
		rules:[
			{
				test:/\.js$/,
				use:'babel-loader'
			},
			
			{
				test:/\.css$/,
				use:css.extract({
					fallback: "style-loader",
          			use: "css-loader"
				})
				
//				[
//		          { loader: "style-loader" },
//		          { loader: "css-loader" }
//		        ]
			}
			
		]
	},
	plugins:[
		new css('app.css'),
		new html({
			filename:'1.html',
			template:'./index.html'
		})
	]
}

