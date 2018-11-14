import * as React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

interface IProps {
    compiler: string,
    framework: string,
    bundler: string
}

// const User = () => {
//     return (<h1> Welcome User </h1>)
// }]


class User extends React.Component<{match: any}, {}> {
    render() {
        console.log('=== It s alive!!! ===')
        let username = this.props.match.params.username;

        return (
            <h1>Hello ussser {username}</h1>
        )
    }
}

export class Hello extends React.Component<IProps, {}> {
    render() {
        return(
            <div>
                <Route path="/" exact strict render={
                    () => {
                    return (
                        <div>
                            <h1>Welcome Home</h1>
                            <ul>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/user">User</Link></li>
                                <li><Link to="/user/John">John</Link></li>
                            </ul>
                        </div>
                    )}
                }/>

                <Route path="/about" render={
                    () => {
                        return (<h1>Welcome About</h1>)}
                }/>

                <Route path="/user/:username?" component={User}/>

            </div>
        )
    }
}