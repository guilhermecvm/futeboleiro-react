import path from 'path'
import webpack from 'webpack'

export default {
    devtool: 'eval',
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        'react-hot-loader/patch',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    // resolve: {
    //     alias: {
    //           'redux-devtools/lib': path.join(__dirname, '..', '..', 'src'),
    //           'redux-devtools': path.join(__dirname, '..', '..', 'src'),
    //         'react': path.join(__dirname, 'node_modules', 'react')
    //     },
    //     extensions: ['', '.js']
    // },
    // resolveLoader: {
    //     'fallback': path.join(__dirname, 'node_modules')
    // },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot/webpack', 'babel'],
            exclude: /node_modules/,
            include: path.join(__dirname, 'src')
        },
        {
            include: /\.json$/,
            loaders: ['json-loader']
        }]
    }
}
