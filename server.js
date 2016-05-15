import webpack from 'webpack'
import config from './webpack.config'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import path from 'path'
import express from 'express'
import axios from 'axios'

const app = new express()
const port = 3000

app.listen(port, error => {
    if (error) {
        console.error(error)
    } else {
        console.info('🌎 Listening at http://localhost:%s/', port)
    }
})

// endpoints
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/api/matches', (req, res) =>
    axios
        .get('http://globoesporte.globo.com/temporeal/futebol/central.json')
        .then(response => res.status(200).send(response.data))
)

// webpack & hot reload
const compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
}))
app.use(webpackHotMiddleware(compiler))
