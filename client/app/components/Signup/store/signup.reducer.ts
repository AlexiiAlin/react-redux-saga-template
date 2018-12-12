import { SignupActions } from './signup.actions';
import { SignupState } from './signup-state';

const initialState : SignupState = {
  userName: '',
  firstName: '',
  lastName: '',
  gender: false,
  password: '',
  error: ''
};

export function signupReducer(state = initialState, action) {
  switch (action.type) {
    case SignupActions.CHANGE_USERNAME: {
      return {...state, ...{userName: action.payload.userName, badCredentials: false}}
    }
    case SignupActions.CHANGE_FIRSTNAME: {
      return {...state, ...{firstName: action.payload.firstName, badCredentials: false}}
    }
    case SignupActions.CHANGE_LASTNAME: {
      return {...state, ...{lastName: action.payload.lastName, badCredentials: false}}
    }
    case SignupActions.CHANGE_PASSWORD: {
      return {...state, ...{password: action.payload.password, badCredentials: false}}
    }
    case SignupActions.CHANGE_GENDER: {
      return {...state, ...{gender: action.payload.gender === "true", badCredentials: false}}
    }
    case SignupActions.SIGNUP_START: {
      return {...state}
    }
    case SignupActions.SIGNUP_SUCCEED: {
      return {...state, ...{badCredentials: false}}
    }
    default:
      return state;
  }
}
