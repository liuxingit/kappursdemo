const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        openPage: '/',
        historyApiFallback: true,
        proxy: {
            '/api/**': 'http://127.0.0.1:8009'
        },
        host: '0.0.0.0',
        disableHostCheck: true
    },
    devtool: 'cheap-module-eval-source-map',
    output: {
        publicPath: '/',
        chunkFilename: 'chunk_[name].js'
    }
});