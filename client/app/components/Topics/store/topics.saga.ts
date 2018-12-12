import { all, call, put, select, takeEvery } from "redux-saga/effects";
import { TopicsActions } from "./topics.actions";
import axios from "axios";
import { delay } from "redux-saga";
import { Topic } from "../../../shared/interfaces";
import { ApplicationState } from '../../../store/application-state';
import { getUserId } from '../../../store/selectors';

export function* topicsSaga() {
  yield all([
    takeEvery(TopicsActions.TOPICS_LOAD_START, getTopics),
    takeEvery(TopicsActions.TOPICS_DELETE, deleteTopic),
    takeEvery(TopicsActions.TOPICS_LIKE, likeTopic)
  ]);
}

export function* getTopics() {
  yield call(delay, 2000);

  const userId = yield select(getUserId);

  const response = yield call(axios.get, '/api/topics');
  const topics: Topic[] = response.data.map(el => {
    return {
      id: el.id,
      title: el.title,
      userName: el.user.username,
      isLiked: el.userLikesTopic.filter(el => el.userId === userId).length > 0,
      numberOfLikes: el.userLikesTopic.length
    }
  });

  yield put({ type: TopicsActions.TOPICS_LOAD_SUCCESS, payload: {topics} });
}

export function* deleteTopic(action) {
  yield call(axios.delete, `/api/topics/${action.payload.id}`);
}

export function* likeTopic(action) {
  const getTopicLike = (state: ApplicationState) => state.topics.topics.filter(topic => topic.id === action.payload.id)[0].isLiked;
  const isLike = yield select(getTopicLike);

  if(isLike) {
    yield call(axios.post, `/api/likes/${action.payload.id}`, {});
  } else {
    yield call(axios.delete, `/api/likes/${action.payload.id}`);
  }
}
