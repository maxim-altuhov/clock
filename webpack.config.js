'use strict';

var path = require('path'),
	webpack = require("webpack");

module.exports = {
	mode: 'production',
	// mode: 'development',
	entry: './#src/js/main_script/script.js',
	output: {
		filename: 'index.min.js',
		// filename: 'index.js',
		path: __dirname + '/dist/js'
	},
	watch: true,

	// переключить при выгрузке в продакшн
	// devtool: "source-map",

	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
						['@babel/preset-env', {
							debug: true,
							corejs: 3,
							useBuiltIns: "usage"
						}]
					]
				}
			}
		}]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
		})
	]
};