export class CreateTopicActions {
  static readonly SAVE_TOPIC = '[CREATE_TOPIC]SAVE_TOPIC';
  static readonly CHANGE_TITLE = '[CREATE_TOPIC]CHANGE_TITLE';
  static readonly SAVE_TOPIC_FAILED = '[CREATE_TOPIC]SAVE_TOPIC_FAILED';
  static readonly RESET_STATE = '[CREATE_TOPIC]RESET_STATE';
  static readonly LOAD_TOPIC_START = '[CREATE_TOPIC]LOAD_TOPIC_STARTED';
  static readonly LOAD_TOPIC_SUCCEED = '[CREATE_TOPIC]LOAD_TOPIC_SUCCEEDED';
  static readonly LOAD_TOPIC_FAIL = '[CREATE_TOPIC]LOAD_TOPIC_FAILED';

  static saveTopic(title: string, userId: number = 4) {
    return {
      type: CreateTopicActions.SAVE_TOPIC,
      payload: {
        title,
        userId
      }
    }
  }

  static updateTopic(title: string, id, userId: number = 4) {
    return {
      type: CreateTopicActions.SAVE_TOPIC,
      payload: {
        id,
        title,
        userId
      }
    }
  }

  static changeTitle(title: string) {
    return {
      type: CreateTopicActions.CHANGE_TITLE,
      payload: {
        title
      }
    }
  }

  static resetState() {
    return {
      type: CreateTopicActions.RESET_STATE
    }
  }

  static loadTopicStart(id) {
    return {
      type: CreateTopicActions.LOAD_TOPIC_START,
      payload: {
        id
      }
    }
  }
}
