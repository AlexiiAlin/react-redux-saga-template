import * as React from 'react';
import {connect} from "react-redux";
import { Button, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core';
import { SignupActions } from './store/signup.actions';
import AccesibilityIcon from '@material-ui/icons/AccessibilityOutlined';
import { ApplicationState } from '../../store/application-state';
import { UserProfileState } from '../NavBar/store/nav-bar';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Link} from "react-router-dom";

interface SignupProps {
  userName: string,
  firstName: string,
  lastName: string,
  password: string,
  gender: boolean,
  changeUserName: Function,
  changeFirstName: Function,
  changeLastName: Function,
  changePassword: Function,
  changeGender: any,
  signup: Function,
  userProfile: UserProfileState
}

interface SignupState {
  confirmPassword: string
}

class ProfileContainer extends React.Component<SignupProps, SignupState> {

  constructor(props) {
    super(props);

    this.state = {
      confirmPassword: ''
    }
  }

  changeConfirmPassword = (event) => {
    this.setState({confirmPassword: event.target.value})
  };

  componentDidMount() {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      return value === this.props.password;
    });
  }

  signup(userName, firstName, lastName, gender, password) {
    this.props.signup(userName, firstName, lastName, gender, password);
  }

  render() {
    const renderBody = (
      <ValidatorForm onSubmit={(event) => {
        console.log(event);
        event.preventDefault();
        return this.signup(this.props.userName, this.props.firstName, this.props.lastName, this.props.gender, this.props.password);
      }}>
        <div style={{alignSelf: 'center'}}>
          <AccesibilityIcon style={{marginLeft: '48%'}}/>
        </div>
        <h1 style={{textAlign: 'center'}}>
          Create a new account!
        </h1>
        <h3 style={{textAlign: 'center', color: 'gray'}}>
          Or <Link to='login'><u><b>login</b></u></Link> if you already have an account.
        </h3>
        <div>
          <TextValidator
            name="username"
            placeholder="Username"
            variant="outlined"
            value={this.props.userName}
            margin="normal"
            onChange={this.props.changeUserName}
            className="width-100"
            validators={['required']}
            errorMessages={['This field is required']}
          />
        </div>

        <div>
          <TextValidator
            name="firstName"
            placeholder="First name"
            variant="outlined"
            value={this.props.firstName}
            margin="normal"
            onChange={this.props.changeFirstName}
            className="width-100"
            validators={['required']}
            errorMessages={['This field is required']}
          />
        </div>

        <div>
          <TextValidator
            name="lastName"
            placeholder="Last name"
            variant="outlined"
            value={this.props.lastName}
            margin="normal"
            onChange={this.props.changeLastName}
            className="width-100"
            validators={['required']}
            errorMessages={['This field is required']}
          />
        </div>

        <div style={{width: '100%'}}>
          <TextValidator
            name="password"
            placeholder="Password"
            variant="outlined"
            value={this.props.password}
            margin="normal"
            onChange={this.props.changePassword}
            type="password"
            className="width-100"
            validators={['required']}
            errorMessages={['This field is required']}
          />
        </div>

        <div style={{width: '100%'}}>
          <TextValidator
            name="confirmPassword"
            placeholder="Confirm Password"
            variant="outlined"
            value={this.state.confirmPassword}
            margin="normal"
            onChange={this.changeConfirmPassword}
            type="password"
            className="width-100"
            validators={['isPasswordMatch']}
            errorMessages={['Password must match!']}
          />
        </div>

        <div style={{width: '100%'}}>
          <FormLabel>Gender:</FormLabel>
          <Radio checked={!this.props.gender}
                 onChange={this.props.changeGender}
                 value="false"
                 name="gender-male"
                 aria-label="A"
                 style={{padding: '12px 4px 12px 12px'}}
          />
          <span>Male</span>
          <Radio
            checked={this.props.gender}
            onChange={this.props.changeGender}
            value="true"
            name="radio-button-demo"
            aria-label="B"
            style={{padding: '12px 4px 12px 12px'}}
          />
          <span>Female</span>
        </div>


        <div>
          <Button type="submit" variant='contained' className="width-100" style={{marginTop: 8}}>Sign up!</Button>
        </div>
      </ValidatorForm>
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
    userName: state.signup.userName,
    firstName: state.signup.firstName,
    lastName: state.signup.lastName,
    gender: state.signup.gender,
    password: state.signup.password,
    userProfile: state.userProfile
  }
};

const mapDispatchToProps = dispatch => {
  return {
    changeUserName: (event) => {
      dispatch(SignupActions.changeUserName(event.target.value));
    },
    changeFirstName: (event) => {
      dispatch(SignupActions.changeFirstName(event.target.value));
    },
    changeLastName: (event) => {
      dispatch(SignupActions.changeLastName(event.target.value));
    },
    changePassword: (event) => {
      dispatch(SignupActions.changePassword(event.target.value));
    },
    changeGender: (event) => {
      dispatch(SignupActions.changeGender(event.target.value));
    },
    signup: (userName, firstName, lastName, gender, password) => {
      dispatch(SignupActions.signupStarted(userName, firstName, lastName, gender, password));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);

