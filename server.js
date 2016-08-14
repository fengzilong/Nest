const WebpackDevServer = require( 'webpack-dev-server' );
const webpack          = require( 'webpack' );
const express          = require( 'express' );
const cookieParser     = require( 'cookie-parser' );
const bodyParser       = require( 'body-parser' );
const opn              = require( 'opn' );
const config           = require( './webpack.config.js' );
const cwd              = process.cwd();

const app = express();
app.use( cookieParser() );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( express.static( __dirname ) );

const staticServerPort = 80;
app.listen( staticServerPort, function() {
	console.log( '[Server] http://127.0.0.1:' + staticServerPort );
	opn( 'http://127.0.0.1:' + staticServerPort + '/examples' );
} );

const compiler = webpack( config );
const serverOptions = {
	quiet: false,
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000
	},
	publicPath: '/dist'
};
const devServer = new WebpackDevServer( compiler, serverOptions );

const devServerPort = 8080;
devServer.listen(devServerPort, 'localhost', function(){
	console.log( '[devServer] http://127.0.0.1:' + devServerPort );
});
