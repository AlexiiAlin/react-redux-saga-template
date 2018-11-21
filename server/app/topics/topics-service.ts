import {Service} from '@tsed/common';
import {topics} from "./topics-mock";

@Service()
export class TopicsService {

  constructor(){}

  public getTopics() {
    return topics;
  }

  public getTopic(id: number) {
    return topics[id-1];
  }

}
