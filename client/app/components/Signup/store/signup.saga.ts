import { all, call, put, takeEvery } from 'redux-saga/effects';
import { SignupActions } from './signup.actions';
import axios from 'axios';

export function* signUpSaga() {
  yield all([
    yield takeEvery(SignupActions.SIGNUP_START, signup),
  ]);
}

function* signup(action) {
  try {
    yield call(axios.post, '/api/userProfile/signup', {
      username: action.payload.userName,
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      gender: action.payload.gender,
      password: action.payload.password
    });

    window.location.href = `${window.location.origin}/login`;
  } catch (e) {
    console.log('SIGNUP failed...');
  }
}

