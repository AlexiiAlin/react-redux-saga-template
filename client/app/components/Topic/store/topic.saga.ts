import {all, call, put, takeEvery} from "redux-saga/effects";
import {TopicActions} from "./topic.actions";
import axios from "axios";

export function* topicSaga() {
  yield all([
    takeEvery(TopicActions.TOPIC_LOAD_START, getTopic)
  ]);
}

function* getTopic(action: any) {
  const result = yield call(axios.get, `/api/topics/${action.payload.id}`);

  const topic = result.data;

  yield put({ type: TopicActions.TOPIC_LOAD_SUCCEED, payload: { topic } });
}
