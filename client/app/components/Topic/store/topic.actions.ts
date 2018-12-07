export class TopicActions {
  static readonly TOPIC_LOAD_START = '[TOPIC]LOAD_STARTED';
  static readonly TOPIC_LOAD_SUCCEED = '[TOPIC]LOAD_SUCCEEDED';
  static readonly ADD_COMMENT_START = '[TOPIC]ADD_COMMENT_STARTED';
  static readonly ADD_COMMENT_SUCCEED = '[TOPIC]ADD_COMMENT_SUCCEEDED';
  static readonly DELETE_COMMENT = '[TOPIC]DELETE_COMMENT';

  static loadTopicStart(id: number) {
    return {
      type: TopicActions.TOPIC_LOAD_START,
      payload: {
        id
      }
    }
  }

  static loadTopicSuccess(topic) {
    return {
      type: TopicActions.TOPIC_LOAD_SUCCEED,
      payload: {
        topic
      }
    }
  }

  static addCommentStart(topicId: number, comment: string) {
    return {
      type: TopicActions.ADD_COMMENT_START,
      payload: {
        topicId,
        comment
      }
    }
  }

  static deleteComment(commentId) {
    return {
      type: TopicActions.DELETE_COMMENT,
      payload: {
        commentId
      }
    }
  }
}
