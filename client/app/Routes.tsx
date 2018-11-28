import * as React from 'react';
import { Route } from "react-router-dom";
import TopicsContainer from "./components/Topics/TopicsContainer";
import TopicContainer from "./components/Topic/TopicContainer";
import CreateTopicContainer from "./components/CreateTopic/CreateTopicContainer";
import LoginContainer from './components/Login/LoginContainer';
import { PrivateRoute } from './PrivateRoute';

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
            <div style={{height: 'calc(100% - 64px)'}}>
                <Route path="/" exact strict render={
                    () => {
                        return (<h1>Welcome to this app that is <u>not</u> a forum</h1>)}
                }/>

                <PrivateRoute path="/topics" exact strict component={TopicsContainer}/>

                <PrivateRoute path="/topics/:id" exact strict component={TopicContainer}/>

                <PrivateRoute path="/createTopic/:id?" exact strict component={CreateTopicContainer}/>

                <Route path="/login" exact strict component={LoginContainer}/>

                <Route path="/logout" exact strict component={LoginContainer}/>

                {/*<Route path="/user/:username?" component={User}/>*/}


                <PrivateRoute path="/user/:username?" component={User}/>
            </div>
        )
    }
}
