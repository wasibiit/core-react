import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {NotFound, Dashboard, BackendError, Signin} from './pages/pages';
import {useSelector} from "react-redux";
import {getters} from "./redux/selectors/selectors";
import {ProtectedRoutes} from "./routes/ProtectedRoutes";


export const App = (props: Props) => {
    const {user} = useSelector(getters.getCurrentUser);
    return (
        <Router>
            <Switch>
            <Route path="/404" component={NotFound}/>
            <Route exact path="/" component={Signin}/>
            <ProtectedRoutes path={"/dashboard"} component={Dashboard} isAuth={user === null}/>
            </Switch>
        </Router>
    );
};