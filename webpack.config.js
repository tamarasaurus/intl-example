/* eslint-env es6 */
const webpack = require('webpack')
const { resolve } = require('path')

module.exports = {
    target: 'web',
    entry: [resolve('./index.js')],
    output: {
        path: resolve('./dist'),
        filename: 'app.js'
    },

    resolveLoader: {
        moduleExtensions: ['-loader']
    }
}
