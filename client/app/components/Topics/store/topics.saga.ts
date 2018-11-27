import { all, call, put, takeEvery } from "redux-saga/effects";
import { TopicsActions } from "./topics.actions";
import axios from "axios";
import { delay } from "redux-saga";
import { Row } from "../../../shared/interfaces";

export function* topicsSaga() {
  yield all([
    takeEvery(TopicsActions.DOG_LOAD_START, getDog),
    takeEvery(TopicsActions.TOPICS_LOAD_START, getTopics),
    takeEvery(TopicsActions.TOPICS_DELETE, deleteTopic)
  ]);
}

// function that makes the api request and returns a Promise for response
function fetchDog() {
  return axios({
    method: "get",
    url: "https://dog.ceo/api/breeds/image/random"
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* getDog() {
  yield call(delay, 1000);
  const response = yield call(fetchDog);
  const message = response.data.message;

  // dispatch a success action to the store with the new dog
  yield put({ type: TopicsActions.DOG_LOAD_SUCCESS, payload: {message} });
}

function* getTopics() {
  const response = yield call(axios.get, '/api/topics');
  const topics: Row[] = response.data.map(el => {
    return {
      id: el.id,
      title: el.title,
      userName: el.user.username

    }
  });

  // dispatch a success action to the store with the new dog
  yield put({ type: TopicsActions.TOPICS_LOAD_SUCCESS, payload: {topics} });

  // start to load the dog.
  yield put({ type: TopicsActions.DOG_LOAD_START })
}

function* deleteTopic(action) {
  yield call(axios.delete, `/api/topics/${action.payload.id}`);
}
