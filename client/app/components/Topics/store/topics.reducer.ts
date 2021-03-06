import {TopicsActions} from "./topics.actions";
import { TopicsState } from './topics-state';
import { Topic } from '../../../shared/interfaces';

export const initialState : TopicsState = {
  topics: [] as Topic[],
  isLoading: false
};

export function topicsReducer(state : any = initialState, action: any) {
  switch (action.type) {
    case TopicsActions.TOPICS_LOAD_START: {
      return {...state, ...{isLoading: true}}
    }
    case TopicsActions.TOPICS_LOAD_SUCCESS: {
      return {...state, ...{topics: action.payload.topics, isLoading: false}}
    }
    case TopicsActions.TOPICS_LOAD_FAIL: {
      return state;
    }
    case TopicsActions.TOPICS_DELETE: {
      return {...state, ...{topics: state.topics.filter(topic => topic.id !== action.payload.id)}};
    }
    case TopicsActions.TOPICS_LIKE: {
      const topics = state.topics.map(topic => {
        return topic.id === action.payload.id
          ? {...topic, ...{
              isLiked: !topic.isLiked,
              numberOfLikes: topic.numberOfLikes + (topic.isLiked ? -1 : 1)
          }}
          : topic
      });

      return {...state, ...{topics}}
    }
    default:
      return state;
  }
}
