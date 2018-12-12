import { Authenticated, BodyParams, Controller, Delete, Get, PathParams, Post, Request } from '@tsed/common';
import {LikeService} from './like-service';

@Controller('/api/likes')
export class LikeController {

  constructor(private likeService: LikeService) {}

  @Delete('/:id')
  @Authenticated()
  public deleteLike(@Request() request: any,
                       @PathParams('id') topicId: number) {
    const userLikesTopic = {
      userId: request.user.id,
      topicId: topicId
    };
    return this.likeService.deleteLike(userLikesTopic);
  }

  @Post('/:id')
  @Authenticated()
  public saveLike(@Request() request: any,
                  @PathParams('id') topicId: number) {
    const userLikesTopic = {
      userId: request.user.id,
      topicId: topicId
    };
    return this.likeService.saveLike(userLikesTopic);
  }

  @Get('/')
  @Authenticated()
  public getLikedTopics(@Request() request: any) {
    return this.likeService.getLikedTopics(request.user.id);
  }

}
