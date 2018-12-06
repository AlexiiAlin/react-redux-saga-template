import { Authenticated, BodyParams, Controller, Delete, Get, PathParams, Post, Request } from '@tsed/common';
import {TopicsService} from './topics-service';
import {Topic} from '../models/topic';
import { Comment } from '../models/comment';

@Controller('/api/topics')
export class TopicsController {

  constructor(private threadsService: TopicsService) {}

  @Get('/')
  @Authenticated()
  public getTopics(@Request() request: any) {
    return this.threadsService.getTopics();
  }

  @Get('/:id')
  @Authenticated()
  public getTopic(@PathParams('id') topicId: number) {
    return this.threadsService.getTopic(topicId);
  }

  @Post('/')
  @Authenticated()
  public createTopic(@Request() request: any,
                     @BodyParams() topic: Topic) {
    topic.userId = request.user.id;
    return this.threadsService.saveTopic(topic);
  }

  @Delete('/:id')
  @Authenticated()
  public deleteTopic(@PathParams('id') topicId: number) {
    return this.threadsService.deleteComments(topicId)
      .then(() => this.threadsService.deleteTopic(topicId));
  }
}
