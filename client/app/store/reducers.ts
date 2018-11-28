import { combineReducers } from 'redux';
import { topicsReducer } from "../components/Topics/store/topics.reducer";
import { topicReducer } from "../components/Topic/store/topic.reducer";
import { createTopicReducer } from '../components/CreateTopic/store/create-topic.reducer';
import { loginReducer } from '../components/Login/store/login.reducer';
import { navBarReducer } from '../components/NavBar/store/nav-bar.reducer';

export default combineReducers({
  topics: topicsReducer,
  topic: topicReducer,
  createTopic: createTopicReducer,
  login: loginReducer,
  userProfile: navBarReducer
})
