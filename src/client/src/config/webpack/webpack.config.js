const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CLIENT_ROOT = path.join(__dirname, '../../../');
const CLIENT_SOURCE = path.join(CLIENT_ROOT, '/src');

module.exports = {
    entry: path.join(CLIENT_SOURCE, '/app/index.tsx'),
    output: {
        path: path.join(CLIENT_ROOT, '/dist'),
        filename: '[name].js'
    },
    module: {
      rules: [
          {
              test: /\.tsx?$/,
              exclude: /node_modules/,
              loader: 'ts-loader'
          }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(CLIENT_SOURCE, 'public/index.html')
        })
    ]
};
