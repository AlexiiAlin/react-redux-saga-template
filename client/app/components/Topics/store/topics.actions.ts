export class TopicsActions {
    static readonly TOPICS_SOME_METHOD = '[TOPICS]SOME_METHOD';
    static readonly TOPICS_LOAD_START = '[TOPICS]LOAD_START';
    static readonly TOPICS_LOAD_SUCCESS = '[TOPICS]LOAD_SUCCESS';
    static readonly TOPICS_LOAD_FAIL = '[TOPICS]LOAD_FAIL';

    static loadTopicsStarted() {
        return {
            type: TopicsActions.TOPICS_LOAD_START
        }
    }

    static loadTopicsSucceeded(topics: any) {
        return {
            type: TopicsActions.TOPICS_LOAD_SUCCESS,
            payload: topics
        }
    }

    static loadTopicsFailed() {
        return {
            type: TopicsActions.TOPICS_LOAD_FAIL
        }
    }

    static someMethod(someParam: any) {
        return {
            type: TopicsActions.TOPICS_SOME_METHOD,
            payload: someParam
        }
    }
}