import {all, call, put, takeEvery} from "redux-saga/effects";
import {CreateQuestionActions} from "./create-question.actions";
import axios from 'axios';
import { delay } from 'redux-saga';
import history from '../../../history'

export function* createTopicSagas() {
  yield all([
    takeEvery(CreateQuestionActions.SAVE_TOPIC, saveTopic),
    takeEvery(CreateQuestionActions.LOAD_TOPIC_START, loadTopic)
  ]);
}

function* saveTopic(action) {
  yield delay(1000);
  yield call(axios.post,'/api/topics', action.payload);

  history.push('/topics');
}

function* loadTopic(action) {
  yield delay(1000);
  const response = yield call(axios.get, `/api/topics/${action.payload.id}`);
  const topic = {
    title: response.data.title,
    description: response.data.description,
    url: response.data.url
  };

  yield put({type: CreateQuestionActions.LOAD_TOPIC_SUCCEED, payload: {topic}})
}
