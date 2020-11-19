const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: ['babel-polyfill', './src/client/index.ts'],
  resolve: {
    extensions: ['.ts','.js']
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader','css-loader']
    },{
        test: /\.ts$/, loader: 'babel-loader'
    }]
  },
  plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Jenkins Builds',
        template: 'src/client/index.html'
      })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: path.join(__dirname, 'dist'),
    port: 5432,
    writeToDisk: true,
    proxy: {
        '/api': {
          "target": 'http://localhost:3000',
          "secure": false,
          "changeOrigin": true
        }
    }
  },

};
