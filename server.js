var WebpackDevServer = require('webpack-dev-server');
var webpack          = require('webpack');
var express          = require('express');
var cookieParser     = require('cookie-parser');
var bodyParser       = require('body-parser');
var config           = require('./webpack.config.js');
var cwd              = process.cwd();

var app = express();
app.use( cookieParser() );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( express.static( __dirname ) );

var staticServerPort = 80;
app.listen( staticServerPort, function() {
	console.log( '[Server] http://localhost:' + staticServerPort );
} );

var compiler = webpack( config );
var serverOptions = {
	quiet: false,
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000
	},
	publicPath: '/dist'
};
var devServer = new WebpackDevServer( compiler, serverOptions );

var devServerPort = 8080;
devServer.listen(devServerPort, 'localhost', function(){
	console.log( '[devServer] http://localhost:' + devServerPort );
});
