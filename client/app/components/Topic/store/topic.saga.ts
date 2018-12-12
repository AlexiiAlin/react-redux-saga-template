import {all, call, put, takeEvery} from "redux-saga/effects";
import {TopicActions} from "./topic.actions";
import axios from "axios";
import { delay } from 'redux-saga';

export function* topicSaga() {
  yield all([
    takeEvery(TopicActions.TOPIC_LOAD_START, getTopic),
    takeEvery(TopicActions.ADD_COMMENT_START, addComment),
    takeEvery(TopicActions.DELETE_COMMENT, deleteComment)
  ]);
}

export function* getTopic(action: any) {
  const result = yield call(axios.get, `/api/topics/${action.payload.id}`);

  const topic = result.data;

  yield put({ type: TopicActions.TOPIC_LOAD_SUCCEED, payload: { topic } });
}

export function* addComment(action: any) {
  yield call(axios.post, '/api/comments', {
    description: action.payload.comment,
    topicId: action.payload.topicId
  });

  yield delay(1000);
  yield put({ type: TopicActions.TOPIC_LOAD_START, payload: { id: action.payload.topicId } });
}

export function* deleteComment(action: any) {
  yield call(axios.delete, `/api/comments/${action.payload.commentId}`);
}
