import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LoginActions } from './login.actions';
import axios from 'axios';

export function* loginSaga() {
  yield all([
    yield takeEvery(LoginActions.LOGIN_START, login),
    yield takeEvery(LoginActions.LOGOUT, logout)
  ]);
}

function* login(action) {
  try {
    yield call(axios.post, '/passport/login', {
      username: action.payload.userName,
      password: action.payload.password
    });

    window.location.href = `${window.location.origin}/topics`;
  } catch (e) {
    yield put({type: LoginActions.LOGIN_FAIL, payload: {badCredentials: false, userName: ''}});
  }
}

function* logout() {
  try {
    yield call(axios.post, '/passport/logout');
    window.location.href = `${window.location.origin}/`;
  } catch (e) {
    console.log('LOGOUT FAILED');
  }
}
