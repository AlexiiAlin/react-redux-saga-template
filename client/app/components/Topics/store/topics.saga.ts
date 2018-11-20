import {call, put, takeLatest} from "redux-saga/effects";
import {TopicsActions} from "./topics.actions";
import axios from "axios";
import {delay} from "redux-saga";

export function* topicsSaga() {
    yield takeLatest(TopicsActions.TOPICS_LOAD_START, workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchDog() {
    return axios({
        method: "get",
        url: "https://dog.ceo/api/breeds/image/random"
    });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga() {
    try {
        yield call(delay, 500);
        const response = yield call(fetchDog);
        const message = response.data.message;

        // dispatch a success action to the store with the new dog
        yield put({ type: TopicsActions.TOPICS_LOAD_SUCCESS, payload: message });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: TopicsActions.TOPICS_LOAD_FAIL, error });
    }
}
