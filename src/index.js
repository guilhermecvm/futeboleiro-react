import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'
import { createStore } from 'redux'

import reducers from './reducers'
import App from './App'

const store = createStore(reducers)
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
