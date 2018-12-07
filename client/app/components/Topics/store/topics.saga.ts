import { all, call, put, takeEvery } from "redux-saga/effects";
import { TopicsActions } from "./topics.actions";
import axios from "axios";
import { delay } from "redux-saga";
import { Topic } from "../../../shared/interfaces";

export function* topicsSaga() {
  yield all([
    takeEvery(TopicsActions.TOPICS_LOAD_START, getTopics),
    takeEvery(TopicsActions.TOPICS_DELETE, deleteTopic)
  ]);
}

export function* getTopics() {
  yield call(delay, 2000);
  const response = yield call(axios.get, '/api/topics');
  const topics: Topic[] = response.data.map(el => {
    return {
      id: el.id,
      title: el.title,
      userName: el.user.username
    }
  });

  yield put({ type: TopicsActions.TOPICS_LOAD_SUCCESS, payload: {topics} });
}

export function* deleteTopic(action) {
  yield call(axios.delete, `/api/topics/${action.payload.id}`);
}
