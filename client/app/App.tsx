import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import { Routes } from './Routes';
import { NavBar } from './NavBar';
import {MuiThemeProvider} from "@material-ui/core";
import {theme} from "./theme";
declare let module: any;

console.log("startApp");

ReactDOM.render(
    <Router>
        <MuiThemeProvider theme={theme}>
            <NavBar/>
            <Routes/>
        </MuiThemeProvider>
    </Router>,
    document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}