import React, {useState} from 'react';

import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import Signup from "./pages/authentication/Signup";
import Signin from "./pages/authentication/Signin";
import PasswordReset from "./pages/authentication/PasswordReset";
import Sidebar from "./components/sidebar/Sidebar";
import routes from "./routes"


const App = () => {
    const [opened, setOpened] = useState();

     const handleDrawerToggle = () => {
        console.log("--------------Drawer Toggeled!!!")
         setOpened(!opened)
        resizeDispatch()
    };

    function resizeDispatch () {
        if (typeof(Event) === 'function') {
            window.dispatchEvent(new Event('resize'));
        } else {
            const evt = window.document.createEvent('UIEvents');
            evt.initUIEvent('resize', true, false, window, 0);
            window.dispatchEvent(evt);
        }
    }

    return (
        <div className={"App"}>
            <Router>
                <Switch>
                    <Route path={"/signup"}>
                        <Signup />
                    </Route>
                    <Route path={"/sidebar"}>
                        <Sidebar
                            routes={routes.items}
                            opened={opened}
                            toggleDrawer={handleDrawerToggle}
                        />
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
