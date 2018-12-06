import { Authenticated, BodyParams, Controller, Delete, Get, PathParams, Post, Request } from '@tsed/common';
import {CommentsService} from './comments-service';
import {Topic} from '../models/topic';
import { Comment } from '../models/comment';

@Controller('/api/comments')
export class CommentsController {

  constructor(private commentsService: CommentsService) {}

  @Delete('/:id')
  @Authenticated()
  public deleteComment(@PathParams('id') commentId: number) {
    return this.commentsService.deleteComment(commentId);
  }

  @Post('')
  @Authenticated()
  public addComment(@Request() request: any,
                    @BodyParams() comment: Comment) {
    comment.userId = request.user.id;
    return this.commentsService.saveComment(comment);
  }
}
