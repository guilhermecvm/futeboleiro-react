import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import reducers from './reducers'
import App from './App'

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)
const history = syncHistoryWithStore(browserHistory, store)

function renderApp(AppComponent) {
    render(
        <AppContainer>
            <AppComponent store={store} history={history} />
        </AppContainer>,
        document.getElementById('root')
    )
}

renderApp(App)

if (module.hot) {
    module.hot.accept('./App', () => renderApp(require('./App').default))
}
