import {all, call, put, takeEvery} from "redux-saga/effects";
import {CreateTopicActions} from "./create-topic.actions";
import axios from 'axios';
import history from '../../../history';

export function* createTopicSagas() {
  yield all([
    takeEvery(CreateTopicActions.SAVE_TOPIC, saveTopic)
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
