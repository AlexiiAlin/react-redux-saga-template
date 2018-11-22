import {BodyParams, Controller, Delete, Get, PathParams, Post} from '@tsed/common';
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

  @Post('/')
  public createTopic(@BodyParams() topic: Topic) {
    return this.threadsService.saveTopic(topic);
  }

  @Delete('/:id')
  public deleteTopic(@PathParams('id') topicId: number) {
    return this.threadsService.deleteTopic(topicId);
  }
}
