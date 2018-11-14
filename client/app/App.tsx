import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './components/Hello';
import {BrowserRouter as Router} from "react-router-dom";
declare let module: any;

console.log("startApp");

ReactDOM.render(

    <Router>
        <Hello compiler="Typescript" framework="React" bundler="Webpack" />
    </Router>
    ,
    document.getElementById('root'));

if (module.hot) {
    module.hot.accept();
}