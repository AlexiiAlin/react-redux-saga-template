import {Service} from '@tsed/common';
import {Connection} from "typeorm";
import {OrmConfigService} from "../services/ormconfig-service";
import { Comment } from '../models/comment';

@Service()
export class CommentsService {

  constructor(private ormService: OrmConfigService){}

  public deleteComment(id: number) {
    return this.ormService.connection.then((connection: Connection) => {
      return connection.getRepository(Comment).delete(id);
    })
  }

  public saveComment(comment) {
    return this.ormService.connection.then((connection: Connection) => {
      return connection.getRepository(Comment).save(comment);
    })
  }

}
