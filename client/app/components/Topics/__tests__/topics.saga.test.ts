import { put, call, take } from 'redux-saga/effects';
import { TopicsActions } from '../store/topics.actions';
import { deleteTopic, getTopics } from '../store/topics.saga';
import { delay } from 'redux-saga';
import axios from 'axios';


describe('Topics saga', () => {

  it('should get topics', () => {
    const responseValue = {
      data: [{
        id: 1,
        title: 'TestTitle1',
        user: {
          username: 'TestUsername1'
        }
      }, {
        id: 2,
        title: 'TestTitle2',
        user: {
          username: 'TestUsername2'
        }
      }]
    };

    const resultLoadSuccess = [{
      id: 1,
      title: 'TestTitle1',
      userName: 'TestUsername1'
    }, {
      id: 2,
      title: 'TestTitle2',
      userName: 'TestUsername2'
    }];

    const generator = getTopics();

    expect(generator.next().value).toEqual(call(delay, 2000));
    expect(generator.next().value).toEqual(call(axios.get, '/api/topics'));
    expect(generator.next(responseValue).value).toEqual(put(TopicsActions.loadTopicsSuccess(resultLoadSuccess)));
    expect(generator.next().done).toBe(true);
  });

  it('should delete topic', () => {
    const action = {
      payload: {
        id: 5
      }
    };

    const generator = deleteTopic(action);

    expect(generator.next().value).toEqual(call(axios.delete, `/api/topics/${action.payload.id}`));
    expect(generator.next().done).toBe(true);
  });

});
