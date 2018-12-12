import { all, call, put, takeEvery } from 'redux-saga/effects';
import { ProfileActions } from './profile.actions';
import axios from 'axios';
import { delay } from 'redux-saga';

export function* profileSaga() {
  yield all([
    yield takeEvery(ProfileActions.SAVE_CHANGES_START, saveChanges),
    yield takeEvery(ProfileActions.LOGOUT, logout),
    yield takeEvery(ProfileActions.LOAD_TOPICS_START, getLikedTopics)
  ]);
}

function* saveChanges(action) {
  try {
    yield call(delay,1000);
    yield call(axios.post, '/api/userProfile/update', {
      username: action.payload.userName,
      password: action.payload.password
    });

    yield put({type: ProfileActions.SAVE_CHANGES_SUCCEED})
  } catch (e) {
    console.log('SIGNUP failed...');
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

function* getLikedTopics() {
  const response = yield call(axios.get, '/api/likes');

  const topics = response.data.map(el => {
    return {
      name: el.topic.title,
      id: el.topic.id
    }
  });

  yield put({type: ProfileActions.LOAD_TOPICS_SUCCESS, payload: {topics}});
}
