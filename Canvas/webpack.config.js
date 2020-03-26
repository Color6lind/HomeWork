let path = require('path');

let conf = {
	entry: './src/start.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		publicPath: 'dist/'
	},
	devServer: {
		overlay: true
	},
	devtool: 'eval-sourcemap'
};

module.exports = conf;