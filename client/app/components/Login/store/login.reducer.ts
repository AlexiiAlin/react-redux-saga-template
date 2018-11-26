import { LoginActions } from './login.actions';

const initialState = {
  userName: '',
  password: '',
  error: '',
  isAuthenticated: false
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LoginActions.CHANGE_USERNAME: {
      return {...state, ...{userName: action.payload.userName}}
    }
    case LoginActions.CHANGE_PASSWORD: {
      return {...state, ...{password: action.payload.password}}
    }
    case LoginActions.LOGIN_START: {
      return {...state}
    }
    case LoginActions.LOGIN_SUCCEED: {
      return {...state, ...{isAuthenticated: true}}
    }
    case LoginActions.LOGIN_FAIL: {
      return {...state, ...{isAuthenticated: false}}
    }
    default:
      return state;
  }
}
