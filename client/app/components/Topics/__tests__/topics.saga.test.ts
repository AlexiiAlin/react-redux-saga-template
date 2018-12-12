import { put, call, select } from 'redux-saga/effects';
import { TopicsActions } from '../store/topics.actions';
import { deleteTopic, getTopics } from '../store/topics.saga';
import { delay } from 'redux-saga';
import axios from 'axios';
import { expectedResult, callResponse } from './topics.data';
import { getUserId } from '../../../store/selectors';


describe('Topics saga', () => {

  it('should get topics', () => {
    const responseValue = callResponse();

    const resultLoadSuccess = expectedResult();

    const generator = getTopics();

    expect(generator.next().value).toEqual(call(delay, 2000));
    expect(generator.next().value).toEqual(select(getUserId));
    expect(generator.next(1).value).toEqual(call(axios.get, '/api/topics'));
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
