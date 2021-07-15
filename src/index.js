import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {App} from "./app";
import './styles/index.css';
import {Provider} from "react-redux";
import {store} from "./store";
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);
reportWebVitals();
