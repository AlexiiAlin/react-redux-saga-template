import * as React from 'react';
import { Route } from "react-router-dom";
import TopicsContainer from "./components/Topics/TopicsContainer";
import TopicContainer from "./components/Topic/TopicContainer";
import CreateTopicContainer from "./components/CreateTopic/CreateTopicContainer";
import LoginContainer from './components/Login/LoginContainer';
import { PrivateRoute } from './PrivateRoute';
import SignupContainer from "./components/Signup/SignupContainer";
import ProfileContainer from './components/Profile/ProfileContainer';
import { NotFound } from './NotFound';

export class Routes extends React.Component<{}, {}> {
  render() {
    return(
      <div style={{height: 'calc(100% - 64px)'}}>
        <Route path="/" exact strict render={
          () => {
            return (<h1 style={{marginLeft: 24}}>Welcome to this app that is <u>not</u> a forum.</h1>)}
        }/>

        <PrivateRoute path="/topics" exact strict component={TopicsContainer}/>

        <PrivateRoute path="/topics/:id" exact strict component={TopicContainer}/>

        <PrivateRoute path="/createTopic/:id?" exact strict component={CreateTopicContainer}/>

        <Route path="/login" exact strict component={LoginContainer}/>

        <PrivateRoute path="/profile" exact strict component={ProfileContainer}/>

        <PrivateRoute path="/profile/edit" exact strict component={ProfileContainer}/>

        <Route path="/signup" exact strict component={SignupContainer}/>

        <Route path="/notFound" exact strict component={NotFound}/>
      </div>
    )
  }
}
