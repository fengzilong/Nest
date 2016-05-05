var path = require('path');
var webpack = require('webpack');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var cwd  = process.cwd();

require('es6-promise').polyfill();

module.exports = {
	debug: true,
	watch: false,
	context: cwd,
	devtool: 'source-map',
	entry: {
		'nest': path.resolve( cwd, 'src/index.js' )
	},
	output: {
		path: path.resolve( cwd, 'dist' ),
		filename: '[name].js',
		publicPath: path.resolve( cwd, 'dist' )
	},
	module: {
		preLoaders: [
			{
				test: /\.tag$/,
				exclude: /node_modules/,
				loader: 'riotjs-loader',
				query: {
					type: 'none'
				}
			}
		],
		loaders: [
			{
				test: /\.(ttf|woff|eot|svg)$/,
				include: /src/,
				loader: 'url-loader?name=[path][name].[ext]?[hash:8]'
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				loader: ExtractTextWebpackPlugin.extract('style-loader', 'css-loader?localIdentName=[name]__[local]--[hash:5]!postcss-loader!less-loader')
			},
			{
				test: /\.js$|\.tag$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			}
		]
	},
	postcss: function(){
		return [
			autoprefixer({
				browsers: [
					'last 2 versions'
				]
			})
		];
	},
	resolve: {
		extensions: [ '', '.js', '.tag', '.css' ]
	},
	externals: [],
	plugins: [
		new ExtractTextWebpackPlugin('nest.css')
	]
};
