import React from 'react';
import {BrowserRouter as Router, Switch, Route, withRouter} from "react-router-dom";

import {NotFound, Dashboard, Signin} from './pages/pages';


export const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={withRouter(Signin)}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </Router>
    );
};