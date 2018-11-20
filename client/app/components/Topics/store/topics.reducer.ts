import {TopicsActions} from "./topics.actions";
import {rows} from "../../../shared/mocks";

const initialState = {
    nr: 1,
    topics: [] as any,
    isLoading: false,
    url: ''
};

export function topicsReducer(state : any = initialState, action: any) {
    switch (action.type) {
        case TopicsActions.TOPICS_SOME_METHOD: {
            console.log('Entered reducer...');
            const nr = state.nr + 1;
            return {...state, ...{nr}};
        }
        case TopicsActions.TOPICS_LOAD_START: {
            console.log('STARTED');
            return {...state, ...{isLoading: true}}
        }
        case TopicsActions.TOPICS_LOAD_SUCCESS: {
            console.log('SUCCESS');
            return {...state, ...{topics: rows, isLoading: false, url: action.payload}}
        }
        case TopicsActions.TOPICS_LOAD_FAIL: {
            console.log('FAILED');
            return state;
        }
        default:
            return state;
    }
}