import { topicsReducer, initialState } from './topics.reducer';
import { TopicsActions } from './topics.actions';
import { Topic } from '../../../shared/interfaces';

const mockedReducer = topicsReducer;

describe('Topics reducer', () => {
  let mockedState;

  beforeEach(() => {
    mockedState = {
      topics: [] as Topic[],
      isLoading: false
    };
  });

  it('should match state', () => {
    expect(mockedState).toEqual(initialState);
  });

  it('should set loading to true when load starts', () => {
    const action = {
      type: TopicsActions.TOPICS_LOAD_START
    };

    const result = mockedReducer(mockedState, action);

    expect(result).toEqual({...mockedState, ...{isLoading: true}});
  });

  it('should update topics and set loading to true when loading succeeds', () => {
    const action = {
      type: TopicsActions.TOPICS_LOAD_SUCCESS,
      payload: {
        topics: [{
          id: 1,
          title: 'TestTitle1',
          userName: 'TestUsername1'
        }]
      }
    };

    const expectedResult = {
      topics: [{
        id: 1,
        title: 'TestTitle1',
        userName: 'TestUsername1'
      }],
      isLoading: false
    };

    const result = mockedReducer(mockedState, action);

    expect(result).toEqual(expectedResult);
  });

});
