import * as React from 'react';
import { Route } from "react-router-dom";
import TopicsContainer from "./components/Topics/TopicsContainer";
import TopicContainer from "./components/Topic/TopicContainer";
import CreateTopicContainer from "./components/CreateTopic/CreateTopicContainer";

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

                <Route path="/topics" exact strict component={TopicsContainer}/>

                <Route path="/createTopic" exact strict component={CreateTopicContainer}/>

                <Route path="/topics/:id" exact strict component={TopicContainer}/>

                <Route path="/user/:username?" component={User}/>
            </div>
        )
    }
}
