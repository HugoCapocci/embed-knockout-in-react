const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		'react-bundle': './src/Main.jsx',
		'react-ts-bundle': './src/Main.tsx',
		'ko-bundle': './src/ko-components/like-widget'
	},
	output: {
		path: path.resolve('public/js')
	},
	devtool: 'eval-source-map',
	mode: 'development',
	module: {
		rules: [
			{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
			{ test: /\.html$/, loader: 'html-loader' },
			{ test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml' },
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
						presets:[
							"@babel/react",
						],
					},
				},
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		modules: [
			// We want roots to resolve the app code:
			path.resolve('./node_modules'),
		],
	},
};
