const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
	const prod = env === 'production'

	return {
		entry: './src/index.js',
		//	entry: './playground/test.js',
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
							presets: [
								[
									'@babel/preset-env',
									{
										targets: {
											node: '10'
										}
									}
								],
								'@babel/preset-react'
							],
							plugins: [
								'@babel/plugin-proposal-object-rest-spread',
								'@babel/plugin-proposal-class-properties'
							]
						}
					}
				},
				{
					test: /\.s?css$/,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						'sass-loader'
					]
				},
				{
					test: /\.(png|jpg|gif|svg)$/,
					loader: 'url-loader'
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: 'styles.css'
			})
		],
		devtool: prod ? 'source-map' : 'cheap-module-eval-source-map',
		devServer: {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods':
					'GET, POST, PUT, DELETE, PATCH, OPTIONS',
				'Access-Control-Allow-Headers':
					'X-Requested-With, content-type, Authorization'
			},
			contentBase: path.resolve('./public'),
			historyApiFallback: true
		}
	}
}
