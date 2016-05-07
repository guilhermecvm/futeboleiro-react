import React from 'react';
import { Route, IndexRoute } from 'react-router'

import MainLayout from './components/main-layout';
import Home from './components/home';
import About from './components/about';

export default (
    <Route path="/" component={MainLayout}>
        <IndexRoute component={Home} />

        <Route path="about" component={About} />
    </Route>
);
