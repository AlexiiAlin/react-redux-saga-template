import {all, call, put, takeEvery} from "redux-saga/effects";
import {CreateTopicActions} from "./create-topic.actions";
import axios from 'axios';
import history from '../../../history';

export function* createTopicSagas() {
  yield all([
    takeEvery(CreateTopicActions.SAVE_TOPIC, saveTopic),
    takeEvery(CreateTopicActions.LOAD_TOPIC_START, loadTopic)
  ]);
}

function* saveTopic(action) {
  try {
    yield call(axios.post,'/api/topics', action.payload);

    history.push('/topics');
  } catch (e) {
    yield put({type: CreateTopicActions.SAVE_TOPIC_FAILED})
  }
}

function* loadTopic(action) {
  try {
    const response = yield call(axios.get, `/api/topics/${action.payload.id}`);
    const title = response.data.title;

    yield put({type: CreateTopicActions.LOAD_TOPIC_SUCCEED, payload: {title}})
  } catch (e) {
    yield put({type: CreateTopicActions.LOAD_TOPIC_FAIL});
  }
}
