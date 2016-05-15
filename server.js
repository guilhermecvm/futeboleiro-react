var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true
    },
    proxy: {
        '/api/*': {
            target: 'http://globoesporte.globo.com/',
            secure: false,
            changeOrigin: true,
            rewrite: function(req) {
                req.url = req.url.replace(/^\/api/, '');
            }
        }
    }
}).listen(3000, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at http://localhost:3000/');
});
