import * as React from 'react';
import {connect} from "react-redux";
import history from '../../history';
import { Button, TextField } from '@material-ui/core';
import { LoginActions } from './store/login.actions';

interface LoginProps {
  userName: string,
  password: string,
  changeUserName: any,
  changePassword: any,
  login: any,
  isAuthenticated: boolean
}

class LoginContainer extends React.Component<LoginProps, {}> {

  login(userName, password) {
    this.props.login(userName, password);
  }

  render() {

    return(
      <div style={{marginLeft: 8}}>
        <div>
          <TextField
            label="User name"
            value={this.props.userName}
            margin="normal"
            onChange={this.props.changeUserName}
          />
        </div>

        <div>
          <TextField
            label="Password"
            value={this.props.password}
            margin="normal"
            onChange={this.props.changePassword}
            type="password"
          />
        </div>

        <div onClick={() => this.login(this.props.userName, this.props.password)}>
          <Button type="submit" variant='contained'>Log in</Button>
        </div>

        <div style={{marginTop: 100}}>{this.props.isAuthenticated ? 'DA BOSS' : 'Nu boss...'}</div>
      </div>
    )
  }
}

const mapStateToProps = (state : any) => {
  return {
    userName: state.login.userName,
    password: state.login.password,
    isAuthenticated: state.login.isAuthenticated
  }
};

const mapDispatchToProps = (dispatch : any) => {
  return {
    changeUserName: (event) => {
      dispatch(LoginActions.changeUserName(event.target.value));
    },
    changePassword: (event) => {
      dispatch(LoginActions.changePassword(event.target.value));
    },
    login: (userName, password) => {
      dispatch(LoginActions.loginStarted(userName, password));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

