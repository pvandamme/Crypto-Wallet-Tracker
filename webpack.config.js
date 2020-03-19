const path = require('path')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve('./public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
						plugins: [
							'@babel/plugin-proposal-object-rest-spread',
							'@babel/plugin-proposal-class-properties'
						]
					}
				}
			},
			{
				test: /\.s?css$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	devServer: {
		contentBase: path.resolve('./public'),
		historyApiFallback: true
	}
}
