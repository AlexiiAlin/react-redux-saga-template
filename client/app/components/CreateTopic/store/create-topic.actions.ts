export class CreateTopicActions {
  static readonly SAVE_TOPIC = '[CREATE_TOPIC]SAVE_TOPIC';
  static readonly CHANGE_TITLE = '[CREATE_TOPIC]CHANGE_TITLE';
  static readonly SAVE_TOPIC_FAILED = '[CREATE_TOPIC]SAVE_TOPIC_FAILED';
  static readonly RESET_STATE = '[CREATE_TOPIC]RESET_STATE';

  static saveTopic(title: string, userId: number = 4) {
    return {
      type: CreateTopicActions.SAVE_TOPIC,
      payload: {
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
}
