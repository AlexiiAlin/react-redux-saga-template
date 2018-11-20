import { combineReducers } from 'redux';
import {topicsReducer} from "../components/Topics/store/topics.reducer";

export default combineReducers({
    topics: topicsReducer
})