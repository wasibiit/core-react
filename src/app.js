import React, {useState} from 'react';

import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";

import Dashboard from './pages/dashboard/Dashboard';


const App = () => {
    return (
        <div className={"App"}>
            <Router>
                <Switch>
                    <Route path="/" component={Dashboard}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
