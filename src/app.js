import React from 'react';

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Signup from "./components/Authentication/Signup";
import Signin from "./components/Authentication/Signin";
import PasswordReset from "./components/Authentication/PasswordReset";


const App = () => {

    return (

            <div className={"App"}>
                <Router>
                   <Switch>
                       <Route path={"/signup"}>
                           <Signup/>
                       </Route>
                       <Route path={"/signin"}>
                           <Signin/>
                       </Route>
                       <Route path={"/passwordReset"}>
                           <PasswordReset/>
                       </Route>
                   </Switch>

                </Router>
            </div>



    );

}

export default App;
