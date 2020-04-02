const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PurifyCssWebpack = require('purifycss-webpack');
const glob = require('glob');
const path = require('path')

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new PurifyCssWebpack({
            paths: glob.sync(path.join(__dirname, './src*.html'))
        })
    ]
})