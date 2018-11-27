import { NavBarActions } from './navBar.actions';

const initialState = {
  userName: '',
  isAuthenticated: false,
  isReady: false
};

export function navBarReducer(state = initialState, action) {
  switch (action.type) {
    case NavBarActions.LOAD_PROFILE:
      return {...state};
    case NavBarActions.LOAD_PROFILE_SUCCEED:
      return {...state, ...action.payload};
    default:
      return state;
  }
}
