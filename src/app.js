import React from 'react';
import {BrowserRouter as Router, Switch, Route, withRouter} from "react-router-dom";
import {NotFound, Dashboard, BackendError, Signin} from './pages/pages';
import {useSelector} from "react-redux";
import {getters} from "./redux/selectors/selectors";
import {ProtectedRoutes} from "./routes/ProtectedRoutes";


export const App = (props: Props) => {
    const {user} = useSelector(getters.getCurrentUser);
    return (
        <Router>
            <Switch>
                <ProtectedRoutes path={"/dashboard"} component={withRouter(Dashboard)} isAuth={user === null}/>
                <Route exact path="/" component={withRouter(Signin)}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    );
};