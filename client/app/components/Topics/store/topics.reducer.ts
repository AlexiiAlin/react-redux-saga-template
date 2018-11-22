import {TopicsActions} from "./topics.actions";

const initialState = {
  nr: 1,
  topics: [] as any,
  isLoadingTopics: false,
  isLoadingDog: false,
  url: ''
};

export function topicsReducer(state : any = initialState, action: any) {
  switch (action.type) {
    case TopicsActions.TOPICS_INCREMENT_VALUE: {
      const nr = state.nr + 1;
      return {...state, ...{nr}};
    }
    case TopicsActions.TOPICS_LOAD_START: {
      console.log('STARTED');
      return {...state, ...{isLoadingTopics: true}}
    }
    case TopicsActions.TOPICS_LOAD_SUCCESS: {
      console.log('SUCCESS');
      return {...state, ...{topics: action.payload.topics, isLoadingTopics: false}}
    }
    case TopicsActions.TOPICS_LOAD_FAIL: {
      console.log('FAILED');
      return state;
    }
    case TopicsActions.DOG_LOAD_START: {
      console.log('STARTED');
      return {...state, ...{isLoadingDog: true}}
    }
    case TopicsActions.DOG_LOAD_SUCCESS: {
      console.log('SUCCESS');
      return {...state, ...{isLoadingDog: false, url: action.payload.message}}
    }
    case TopicsActions.DOG_LOAD_FAIL: {
      console.log('FAILED');
      return state;
    }
    case TopicsActions.TOPICS_DELETE: {
      return {...state, ...{topics: state.topics.filter(topic => topic.id !== action.payload.id)}};
    }
    default:
      return state;
  }
}
