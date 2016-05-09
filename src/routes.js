import React from 'react';
import { Route, IndexRoute } from 'react-router'

import MainLayout from './components/main-layout';
import Home from './components/home';
import Matches from './components/matches';

export default (
    <Route path="/" component={MainLayout}>
        <IndexRoute component={Home} />

        <Route path="matches" component={Matches} />
    </Route>
);
