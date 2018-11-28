export class TopicsActions {
  static readonly TOPICS_LOAD_START = '[TOPICS]LOAD_START';
  static readonly TOPICS_LOAD_SUCCESS = '[TOPICS]LOAD_SUCCESS';
  static readonly TOPICS_LOAD_FAIL = '[TOPICS]LOAD_FAIL';
  static readonly TOPICS_DELETE = '[TOPICS]DELETE';

  static loadTopicsStarted() {
    return {
      type: TopicsActions.TOPICS_LOAD_START
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
