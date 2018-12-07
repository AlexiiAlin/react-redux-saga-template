import { topicsReducer, initialState } from '../store/topics.reducer';
import { TopicsActions } from '../store/topics.actions';
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

  it('should update topics and set loading to false when loading succeeds', () => {
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

  it('should update topics when a topic is deleted', () => {
    mockedState.topics = [{
      id: 1,
      title: 'TestTitle1',
      userName: 'TestUsername1'
    }, {
      id: 2,
      title: 'TestTitle2',
      userName: 'TestUsername2'
    }];

    const action = {
      type: TopicsActions.TOPICS_DELETE,
      payload: {
        id: 2
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
