import {CreateQuestionActions} from "./create-question.actions";
import { CreateQuestionState } from './create-question-state';

const initialState : CreateQuestionState = {
  title: '',
  description: '',
  url: '',
  isLoading: false,
  isSaving: false
};

export function createQuestionReducer(state = initialState, action) {
  switch (action.type) {
    case CreateQuestionActions.SAVE_TOPIC: {
      return {...state, ...{isSaving: true}};
    }
    case CreateQuestionActions.CHANGE_TITLE: {
      return {...state, ...{title: action.payload.title}}
    }
    case CreateQuestionActions.CHANGE_DESCRIPTION: {
      return {...state, ...{description: action.payload.description}}
    }
    case CreateQuestionActions.CHANGE_URL: {
      return {...state, ...{url: action.payload.url}}
    }
    case CreateQuestionActions.LOAD_TOPIC_START: {
      return {...state, ...{isLoading: true, isSaving: false}}
    }
    case CreateQuestionActions.LOAD_TOPIC_SUCCEED: {
      return {...state, ...{title: action.payload.topic.title, description: action.payload.topic.description, url: action.payload.topic.url, isLoading: false}}
    }
    case CreateQuestionActions.RESET_STATE: {
      return {...state, ...{title: '', description: '', url: '', isLoading: false, isSaving: false}}
    }
    default:
      return state;
  }
}
