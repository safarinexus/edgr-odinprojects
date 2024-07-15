const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    mode: 'development',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'main.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', 
            favicon: './src/assets/favicon.svg',
        }), 
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader"]
            }, 
            {
                test: /\.(jpe?g|png|gif|svg|mp4)$/i,
                type: "asset",
              }, 
        ],
      },
  };