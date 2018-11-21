import {TopicActions} from "./topic.actions";

const initialState = {
  topic: {},
  isLoading: false
}

export function topicReducer(state = initialState, action) {
  switch (action.type) {
    case TopicActions.TOPIC_LOAD_START: {
      return {...state, ...{isLoading: true}}
    }
    case TopicActions.TOPIC_LOAD_SUCCEED: {
      return {...state, ...{isLoading: false, topic: action.payload.topic}}
    }
    default:
      return state;
  }
}
