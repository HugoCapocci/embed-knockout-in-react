const path = require('path');

module.exports = {
  entry: {
    'react-bundle': [
      '@babel/polyfill',
      './src/Main.jsx',
    ],
    'react-ts-bundle': [
      '@babel/polyfill',
      './src/Main.tsx',
    ],
    'ko-component': [
      '@babel/polyfill',
      './src/ko-components/like-widget',
    ],
    'ko-ts-component': [
      '@babel/polyfill',
      './src/ko-components/like-widget.ts',
    ],
    'ko-bundle': [
      '@babel/polyfill',
      './src/main-knockout.ts',
    ],
  },
  output: {
    path: path.resolve('public/js'),
  },
  devtool: 'eval-source-map',
  mode: 'development',
  module: {
    rules: [
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.html$/, loader: 'html-loader' },
      { test: /\.svg$/, loader: 'url-loader?mimetype=image/svg+xml' },
      {
        test: /\.(ts|tsx)?$/,
        use: [
          'babel-loader',
          'ts-loader',
        ],
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              '@babel/react',
            ],
          },
        },
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
