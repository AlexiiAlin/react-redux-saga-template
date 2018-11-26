import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LoginActions } from './login.actions';
import axios from 'axios';

export function* loginSaga() {
  yield all([
    yield takeEvery(LoginActions.LOGIN_START, login)
  ]);
}

function* login(action) {
  try {
    yield call(axios.post, '/api/login', {
      userName: action.payload.userName,
      password: action.payload.password
    });

    yield put({type: LoginActions.LOGIN_SUCCEED, payload: {isAuthenticated: true}});
  } catch (e) {
    yield put({type: LoginActions.LOGIN_FAIL, payload: {isAuthenticated: false}});
  }
}
