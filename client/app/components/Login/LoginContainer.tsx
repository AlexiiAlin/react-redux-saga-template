import * as React from 'react';
import {connect} from "react-redux";
import { Button, TextField } from '@material-ui/core';
import { LoginActions } from './store/login.actions';
import AccesibilityIcon from '@material-ui/icons/AccessibilityOutlined';
import { ApplicationState } from '../../store/application-state';
import { UserProfileState } from '../NavBar/store/nav-bar';

interface LoginProps {
  userName: string,
  password: string,
  changeUserName: any,
  changePassword: any,
  badCredentials: boolean,
  login: Function,
  logout: Function,
  userProfile: UserProfileState
}

class LoginContainer extends React.Component<LoginProps, {}> {

  login(userName, password) {
    this.props.login(userName, password);
  }

  logout() {
    this.props.logout();
  }

  render() {
    const renderBody = this.props.userProfile.isAuthenticated
      ? (
        <div onClick={() => this.logout()}>
          <Button type="submit" variant='contained' className="width-100">Log out</Button>
        </div>
      ) : (
        <React.Fragment>
          <div style={{alignSelf: 'center'}}>
            <AccesibilityIcon style={{marginLeft: '48%'}}/>
          </div>
          <div style={{textAlign: 'center'}}>
            Sign in to access the app!
          </div>

          <div>
            <TextField
              placeholder="User name"
              variant="outlined"
              value={this.props.userName}
              margin="normal"
              onChange={this.props.changeUserName}
              className="width-100"
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  this.login(this.props.userName, this.props.password);
                }
              }}
            />
          </div>

          <div style={{width: '100%'}}>
            <TextField
              placeholder="Password"
              variant="outlined"
              value={this.props.password}
              margin="normal"
              onChange={this.props.changePassword}
              type="password"
              className="width-100"
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  this.login(this.props.userName, this.props.password);
                }
              }}
            />
          </div>

          <div onClick={() => this.login(this.props.userName, this.props.password)}>
            <Button type="submit" variant='contained' className="width-100" style={{marginTop: 8}}>Log in</Button>
          </div>

          <div style={{marginTop: 20, textAlign: 'center'}}>{this.props.badCredentials && 'Wrong username or password...'}</div>
        </React.Fragment>
      );

    return(
      <div style={{display: 'flex', height: '100%'}}>
        <div className="login-container">
          {renderBody}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state : ApplicationState) => {
  return {
    userName: state.login.userName,
    password: state.login.password,
    badCredentials: state.login.badCredentials,
    userProfile: state.userProfile
  }
};

const mapDispatchToProps = dispatch => {
  return {
    changeUserName: (event) => {
      dispatch(LoginActions.changeUserName(event.target.value));
    },
    changePassword: (event) => {
      dispatch(LoginActions.changePassword(event.target.value));
    },
    login: (userName, password) => {
      dispatch(LoginActions.loginStarted(userName, password));
    },
    logout: () => {
      dispatch(LoginActions.logout())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

