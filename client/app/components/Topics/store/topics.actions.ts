export class TopicsActions {
  static readonly TOPICS_INCREMENT_VALUE = '[TOPICS]INCREMENT_VALUE';
  static readonly TOPICS_LOAD_START = '[TOPICS]LOAD_START';
  static readonly TOPICS_LOAD_SUCCESS = '[TOPICS]LOAD_SUCCESS';
  static readonly TOPICS_LOAD_FAIL = '[TOPICS]LOAD_FAIL';
  static readonly DOG_LOAD_START = '[TOPICS]DOG_LOAD_START';
  static readonly DOG_LOAD_SUCCESS = '[TOPICS]DOG_LOAD_SUCCESS';
  static readonly DOG_LOAD_FAIL = '[TOPICS]DOG_LOAD_FAIL';
  static readonly TOPICS_DELETE = '[TOPICS]DELETE';

  static loadTopicsStarted() {
    return {
      type: TopicsActions.TOPICS_LOAD_START
    }
  }

  static incrementNumber(someParam: any) {
    return {
      type: TopicsActions.TOPICS_INCREMENT_VALUE,
      payload: someParam
    }
  }

  static deleteTopic (id: number) {
    return {
      type: TopicsActions.TOPICS_DELETE,
      payload: {
        id
      }
    }
  }
}
