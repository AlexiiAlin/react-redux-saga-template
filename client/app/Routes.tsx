import * as React from 'react';
import { Route } from "react-router-dom";
import Topics from "./components/Topics/TopicsContainer";
import {Topic} from "./components/Topic/Topic";

class User extends React.Component<{match: any}, {}> {
    render() {
        return (
            <h1>Hello user {this.props.match.params.username}</h1>
        )
    }
}

export class Routes extends React.Component<{}, {}> {
    render() {
        return(
            <div>
                <Route path="/" exact strict render={
                    () => {
                        return (<h1>Welcome to this app that is <b>not</b> a forum</h1>)}
                }/>

                <Route path="/topics" exact strict component={Topics}/>

                <Route path="/topics/:id" exact strict component={Topic}/>

                <Route path="/user/:username?" component={User}/>
            </div>
        )
    }
}