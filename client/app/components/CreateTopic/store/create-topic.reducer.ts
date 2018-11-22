import {CreateTopicActions} from "./create-topic.actions";

const initialState = {
  title: ''
}

export function createTopicReducer(state = initialState, action) {
  switch (action.type) {
    case CreateTopicActions.SAVE_TOPIC: {
      return {...state};
    }
    case CreateTopicActions.CHANGE_TITLE: {
      return {...state, ...{title: action.payload.title}}
    }
    case CreateTopicActions.RESET_STATE: {
      return {...state, ...{title: ''}}
    }
    default:
      return state;
  }
}
