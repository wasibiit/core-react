import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './styles/app.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import {
    NotFound,
    Dashboard,
    BackendError
} from './Pages/pages';
import Signin from "./Pages/authentication/Signin";
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
