import { all } from "redux-saga/effects";
import { topicsSaga } from "../components/Topics/store/topics.saga";
import { topicSaga } from "../components/Topic/store/topic.saga";
import { createTopicSagas } from "../components/CreateTopic/store/create-topic.saga";
import { loginSaga } from '../components/Login/store/login.saga';
import history from '../history';
import { navBarSaga } from '../components/NavBar/store/navBar.saga';

// watcher saga: watches for actions dispatched to the store, starts worker saga
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
      console.log(history);
      window.location.href = `${window.location.origin}/login`;
    } else {
      console.log(e);
    }
  }
}
