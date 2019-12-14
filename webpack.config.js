const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const fs  = require('fs');
const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './scripts/ant-theme-vars.less'), 'utf8'));

module.exports = {
	devtool: 'source-map',
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "index_bundle.js"
	},
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						 presets: ["@babel/preset-env", "@babel/preset-react"]
					},
					
				}
			}, {
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader'],
					options: {

modifyVars: themeVariables,
root: path.resolve(__dirname, './')
 
         }
				}),
				
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: 'file-loader'
				}]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			hash: true,
			filename: "index.html", //target html
			template: "./src/index.html" //source html
		}),
		new ExtractTextPlugin({
			filename: 'css/style.css'
		})
	]
}