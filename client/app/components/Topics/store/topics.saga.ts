import {all, call, put, takeEvery, takeLatest} from "redux-saga/effects";
import {TopicsActions} from "./topics.actions";
import axios from "axios";
import {delay} from "redux-saga";

export function* topicsSaga() {
  yield all([
    takeEvery(TopicsActions.DOG_LOAD_START, getDog),
    takeEvery(TopicsActions.TOPICS_LOAD_START, getTopics)
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
  try {
    yield call(delay, 1000);
    const response = yield call(fetchDog);
    const message = response.data.message;

    // dispatch a success action to the store with the new dog
    yield put({ type: TopicsActions.DOG_LOAD_SUCCESS, payload: {message} });

  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: TopicsActions.DOG_LOAD_FAIL, error });
  }
}

function* getTopics() {
  try {
    const response = yield call(axios.get, '/api/topics');
    const topics = response.data;

    // dispatch a success action to the store with the new dog
    yield put({ type: TopicsActions.TOPICS_LOAD_SUCCESS, payload: {topics} });

    // start to load the dog.
    yield put({ type: TopicsActions.DOG_LOAD_START })
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: TopicsActions.TOPICS_LOAD_FAIL, error });
  }
}
