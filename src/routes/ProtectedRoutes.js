import {Route, Redirect} from "react-router-dom";
import DashboardStyles from "../styles/dashboard";


export const ProtectedRoutes = ({isAuth: isAuth, component: Component, ...rest}) => {
    return (
        <Route {...rest} render={(props) => {
            if (isAuth) {
                return <Component classes={DashboardStyles} />
            } else {
                return (
                    <Redirect to={{pathname: "/", state: {from: props.location}}}/>
                )
            }
        }}/>
    );
}