import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
<<<<<<< HEAD
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
=======
=======
>>>>>>> 9d57973dba1de7f0600ac94209516f237ca46e98
>>>>>>> Stashed changes
import './Styles/app.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
>>>>>>> 9d57973dba1de7f0600ac94209516f237ca46e98
import {
    NotFound,
    Dashboard,
    BackendError,
    Signin
} from './Pages/pages';
<<<<<<< Updated upstream
import Signin from "./Pages/Authentication/Signin";
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
import Signin from "./Pages/Authentication/Signin";
>>>>>>> 9d57973dba1de7f0600ac94209516f237ca46e98
=======
import Signin from "./Pages/Authentication/Signin";
>>>>>>> 9d57973dba1de7f0600ac94209516f237ca46e98
>>>>>>> Stashed changes
ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Switch>
              <Route exact path="/Signin" component={Signin} />
              <Route exact path="/404" component={NotFound} />
              <Route exact path="/500" component={BackendError} />
              <Route path="/" component={Dashboard}/>
          </Switch>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
