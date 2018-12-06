import { all } from "redux-saga/effects";
import { topicsSaga } from "../components/Topics/store/topics.saga";
import { topicSaga } from "../components/Topic/store/topic.saga";
import { createTopicSagas } from "../components/CreateTopic/store/create-topic.saga";
import { loginSaga } from '../components/Login/store/login.saga';
import { navBarSaga } from '../components/NavBar/store/nav-bar.saga';
import history from '../history';

export function* rootSaga() {
  try {
    yield all([
      topicsSaga(),
      topicSaga(),
      createTopicSagas(),
      loginSaga(),
      navBarSaga()
    ])
  } catch (e) {
    if(e.response.status === 403) {
      window.location.href = `${window.location.origin}/login`;
    } else {
    }
  }
}
