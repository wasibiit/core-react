import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NotFound, Dashboard, BackendError, Signin } from './pages/pages';
import { useSelector } from "react-redux";
import { getters } from "./redux/selectors/selectors";



export const App = (props: Props) => {
    const {user} = useSelector(getters.getCurrentUser);
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" component={Signin} />
                    <Route path="/404" component={NotFound} />
                    <Route path="/500" component={BackendError} />
                    <Route exact path="/dashboard" component={Dashboard}/>
                </Switch>
            </Router>
        </div>
    );
};