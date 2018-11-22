export class TopicActions {
  static readonly TOPIC_LOAD_START = '[TOPIC]LOAD_STARTED';
  static readonly TOPIC_LOAD_SUCCEED = '[TOPIC]LOAD_SUCCEEDED';
  static readonly TOPIC_LOAD_FAIL = '[TOPIC]LOAD_FAILED';

  static loadTopicStart(id: number) {
    return {
      type: TopicActions.TOPIC_LOAD_START,
      payload: {
        id
      }
    }
  }
}