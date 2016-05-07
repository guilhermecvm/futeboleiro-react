import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from './routes';

const App = ({ store, history }) => (
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>
);

export default App;
