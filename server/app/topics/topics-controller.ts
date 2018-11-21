import { Controller, Get, PathParams} from '@tsed/common';
import {TopicsService} from './topics-service';
import {Topic} from '../models/topic';

@Controller('/api/topics')
export class TopicsController {

  constructor(private threadsService: TopicsService) {}

  @Get('/')
  public getTopics() {
    return this.threadsService.getTopics();
  }

  @Get('/:id')
  public getTopic(@PathParams('id') topicId: number) {
    return this.threadsService.getTopic(topicId);
  }

}
