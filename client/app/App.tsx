import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import { Routes } from './Routes';
import { NavBar } from './NavBar';
import {MuiThemeProvider} from "@material-ui/core";
import {theme} from "./theme";
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import reducers from './store/reducers';
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import {rootSaga} from "./store/sagas";

declare let module: any;
declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}

console.log("startApp");

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));

// run the saga
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <MuiThemeProvider theme={theme}>
                <NavBar/>
                <Routes/>
            </MuiThemeProvider>
        </Router>
    </Provider>,
    document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}