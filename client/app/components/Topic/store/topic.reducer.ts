import {TopicActions} from "./topic.actions";
import { TopicState } from './topic-state';
import { Topic } from '../../../shared/interfaces';
import { deepCopy } from '../../../shared/extensions';

const initialState : TopicState = {
  topic: {} as Topic,
  isLoading: false
};

export function topicReducer(state = initialState, action) {
  switch (action.type) {
    case TopicActions.TOPIC_LOAD_START: {
      return {...state, ...{isLoading: true}}
    }
    case TopicActions.TOPIC_LOAD_SUCCEED: {
      return {...state, ...{isLoading: false, topic: action.payload.topic}}
    }
    case TopicActions.ADD_COMMENT_START: {
      return {...state, ...{isLoading: true}}
    }
    case TopicActions.ADD_COMMENT_SUCCEED: {
      return {...state, ...{isLoading: false}}
    }
    case TopicActions.DELETE_COMMENT: {
      let newState : TopicState = deepCopy(state);
      newState.topic.comments = newState.topic.comments.filter(comment => comment.id !== action.payload.commentId);
      return {...state, ...newState}
    }
    default:
      return state;
  }
}
