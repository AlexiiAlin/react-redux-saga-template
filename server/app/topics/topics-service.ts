import {Service} from '@tsed/common';
import {Connection} from "typeorm";
import {Topic} from "../models/topic";
import {OrmConfigService} from "../services/ormconfig-service";
import { Comment } from '../models/comment';

@Service()
export class TopicsService {

  constructor(private ormService: OrmConfigService){}

  public getTopics() {
    return this.ormService.connection.then((connection: Connection) => {
      return connection.getRepository(Topic)
        .find({relations: ["user"]});
    });
  }

  public getTopic(id: number) {
    return this.ormService.connection.then((connection: Connection) => {
      return connection.getRepository(Topic)
        .findOne(id, {relations: ["comments", "comments.user", "user"]});
    })
  }

  public saveTopic(topic) {
    return this.ormService.connection.then((connection: Connection) => {
      return connection.getRepository(Topic).save(topic);
    })
  }

  public deleteTopic(id: number) {
    return this.ormService.connection.then((connection: Connection) => {
      return connection.getRepository(Topic).delete(id);
    })
  }

  public deleteComments(id: number) {
    return this.ormService.connection.then((connection: Connection) => {
      return connection.createQueryBuilder()
        .delete()
        .from(Comment)
        .where("topicId = :id", { id})
        .execute();
    })
  }

}
