import { Redirect, Route, RouteProps } from 'react-router';
import * as React from 'react';
import { connect } from 'react-redux';
import { store } from './index';
import { LoginActions } from './components/Login/store/login.actions';

interface PrivateRouteProps extends RouteProps{
  component: any,
  path: string,
}

interface PriveRouteState {
  isAuthenticated: boolean,
  isReady: boolean
}

export class PrivateRoute extends React.Component<PrivateRouteProps, PriveRouteState> {
  constructor(props) {
    super(props);

    this.state = {
      isReady: false,
      isAuthenticated: false
    }
  }

  componentWillMount(): void {
    store.subscribe(() => {
      const {isAuthenticated, isReady} = store.getState().userProfile;
      this.setState({isReady, isAuthenticated});
    })
  }

  render() {
    console.log(this.state);
    const route = this.state.isAuthenticated
      ?
        <Route path={this.props.path} component={this.props.component}/>
      : <Route path={this.props.path} render={() => (
          <Redirect to='/login'/>
      )} />;

    const result = this.state.isReady ? route : null

    return (
      result
    );
  }
}
