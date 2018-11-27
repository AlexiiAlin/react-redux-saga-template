import { all, call, put, takeEvery } from 'redux-saga/effects';
import { NavBarActions } from './navBar.actions';
import axios from 'axios';

export function* navBarSaga() {
  yield all([
    yield takeEvery(NavBarActions.LOAD_PROFILE, getProfileInfo)
  ])
}

function* getProfileInfo() {
  const response = yield call(axios.get, '/api/userProfile/me');

  const payload = {isAuthenticated: response.data.isAuthenticated, userName: response.data.userName, isReady: true};

  yield put({type: NavBarActions.LOAD_PROFILE_SUCCEED, payload})

}
