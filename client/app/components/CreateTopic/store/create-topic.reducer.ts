import {CreateTopicActions} from "./create-topic.actions";
import { CreateTopicState } from './create-topic-state';

const initialState : CreateTopicState = {
  title: '',
  isLoading: false,
  isSaving: false
};

export function createTopicReducer(state = initialState, action) {
  switch (action.type) {
    case CreateTopicActions.SAVE_TOPIC: {
      return {...state, ...{isSaving: true}};
    }
    case CreateTopicActions.CHANGE_TITLE: {
      return {...state, ...{title: action.payload.title}}
    }
    case CreateTopicActions.LOAD_TOPIC_START: {
      return {...state, ...{isLoading: true, isSaving: false}}
    }
    case CreateTopicActions.LOAD_TOPIC_SUCCEED: {
      return {...state, ...{title: action.payload.title, isLoading: false}}
    }
    case CreateTopicActions.RESET_STATE: {
      return {...state, ...{title: '',isLoading: false, isSaving: false}}
    }
    default:
      return state;
  }
}
