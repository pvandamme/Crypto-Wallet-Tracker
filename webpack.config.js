const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
	const prod = env === 'production'

	return {
		entry: './src/index.js',
		output: {
			path: path.resolve('./public/dist'),
			filename: 'bundle.js',
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
											node: '10',
										},
									},
								],
								'@babel/preset-react',
							],
							plugins: [
								'@babel/plugin-proposal-object-rest-spread',
								'@babel/plugin-proposal-class-properties',
								[
									'module-resolver',
									{
										root: ['./src'],
									},
								],
							],
						},
					},
				},
				{
					test: /\.s?css$/,
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						'sass-loader',
					],
				},
				{
					test: /\.(png|jpg|gif|svg)$/,
					loader: 'url-loader',
				},
			],
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: 'styles.css',
			}),
		],
		devtool: prod ? 'source-map' : 'eval-cheap-source-map',
		devServer: {
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods':
					'GET, POST, PUT, DELETE, PATCH, OPTIONS',
				'Access-Control-Allow-Headers':
					'X-Requested-With, content-type, Authorization',
			},
			contentBase: path.resolve('./public'),
			publicPath: 'dist',
			historyApiFallback: true,
		},
	}
}
