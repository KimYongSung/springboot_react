const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'src/main/resources/static'),
        publicPath : '/static/',
        host: "0.0.0.0",
        port: 3000,
        proxy: {
            "**": "http://localhost:8080"
        }
    },
    plugins: [
        new webpack.NamedModulesPlugin()
    ]
};