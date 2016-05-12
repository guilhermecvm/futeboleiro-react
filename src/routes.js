import React from 'react';
import { Route, IndexRoute } from 'react-router'

import MainLayout from './components/main-layout';
import Matches from './components/matches';

export default (
    <Route path="/" component={MainLayout}>
        <IndexRoute component={Matches} />
    </Route>
);
