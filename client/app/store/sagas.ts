import { all } from "redux-saga/effects";
import { topicsSaga } from "../components/Topics/store/topics.saga";
import { topicSaga } from "../components/Topic/store/topic.saga";
import { createTopicSagas } from "../components/CreateTopic/store/create-topic.saga";
import { loginSaga } from '../components/Login/store/login.saga';
import { navBarSaga } from '../components/NavBar/store/nav-bar.saga';
import history from '../history';
import {signUpSaga} from "../components/Signup/store/signup.saga";
import { profileSaga } from '../components/Profile/store/profile.saga';

export function* rootSaga() {
  try {
    yield all([
      topicsSaga(),
      topicSaga(),
      createTopicSagas(),
      loginSaga(),
      signUpSaga(),
      navBarSaga(),
      profileSaga()
    ])
  } catch (e) {
    if(e.response.status === 403) {
      window.location.href = `${window.location.origin}/login`;
    } else if(e.response.status === 404 || e.response.status === 400) {
      window.location.href = `${window.location.origin}/notFound`;
    }
  }
}
