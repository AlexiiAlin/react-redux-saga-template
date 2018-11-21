import { combineReducers } from 'redux';
import {topicsReducer} from "../components/Topics/store/topics.reducer";
import {topicReducer} from "../components/Topic/store/topic.reducer";

export default combineReducers({
  topics: topicsReducer,
  topic: topicReducer
})
