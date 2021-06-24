import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {NotFound, Dashboard, Signin} from './pages/pages';


export const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/signin" component={Signin}/>
                <Route exact path={'/404'} component={NotFound} />
                <Route path="/" component={Dashboard}/>
            </Switch>
        </Router>
    );
};