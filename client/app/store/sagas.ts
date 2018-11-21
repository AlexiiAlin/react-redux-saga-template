import {all} from "redux-saga/effects";
import {topicsSaga} from "../components/Topics/store/topics.saga";
import {topicSaga} from "../components/Topic/store/topic.saga";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* rootSaga() {
  yield all([
    topicsSaga(),
    topicSaga()
  ])
}
