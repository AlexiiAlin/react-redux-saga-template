export class CreateQuestionActions {
  static readonly SAVE_TOPIC = '[CREATE_TOPIC]SAVE_TOPIC';
  static readonly CHANGE_TITLE = '[CREATE_TOPIC]CHANGE_TITLE';
  static readonly CHANGE_DESCRIPTION = '[CREATE_TOPIC]CHANGE_DESCRIPTION';
  static readonly CHANGE_URL = '[CREATE_TOPIC]CHANGE_URL';
  static readonly RESET_STATE = '[CREATE_TOPIC]RESET_STATE';
  static readonly LOAD_TOPIC_START = '[CREATE_TOPIC]LOAD_TOPIC_STARTED';
  static readonly LOAD_TOPIC_SUCCEED = '[CREATE_TOPIC]LOAD_TOPIC_SUCCEEDED';

  static saveTopic(title: string, description: string, url: string, userId: number = 0) {
    return {
      type: CreateQuestionActions.SAVE_TOPIC,
      payload: {
        title,
        description,
        url,
        userId
      }
    }
  }

  static updateTopic(title: string, description: string, url: string, id, userId: number = 4) {
    return {
      type: CreateQuestionActions.SAVE_TOPIC,
      payload: {
        id,
        title,
        description,
        url,
        userId
      }
    }
  }

  static changeTitle(title: string) {
    return {
      type: CreateQuestionActions.CHANGE_TITLE,
      payload: {
        title
      }
    }
  }

  static changeDescription(description: string) {
    return {
      type: CreateQuestionActions.CHANGE_DESCRIPTION,
      payload: {
        description
      }
    }
  }

  static changeUrl(url: string) {
    return {
      type: CreateQuestionActions.CHANGE_URL,
      payload: {
        url
      }
    }
  }

  static resetState() {
    return {
      type: CreateQuestionActions.RESET_STATE
    }
  }

  static loadTopicStart(id) {
    return {
      type: CreateQuestionActions.LOAD_TOPIC_START,
      payload: {
        id
      }
    }
  }
}
