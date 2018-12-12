import {Service} from '@tsed/common';
import {Connection} from "typeorm";
import {OrmConfigService} from "../services/ormconfig-service";
import { UserLikesTopic } from '../models/userLikeTopic';
import { Topic } from '../models/topic';

@Service()
export class LikeService {

  constructor(private ormService: OrmConfigService){}

  public deleteLike(userLikesTopic) {
    return this.ormService.connection.then((connection: Connection) => {
      return connection.getRepository(UserLikesTopic).delete(userLikesTopic);
    })
  }

  public saveLike(userLikesTopic) {
    return this.ormService.connection.then((connection: Connection) => {
      return connection.getRepository(UserLikesTopic).save(userLikesTopic);
    })
  }

  public getLikedTopics(userId) {
    return this.ormService.connection.then((connection: Connection) => {
      return connection.getRepository(UserLikesTopic)
        .find({relations: ["topic"], where: {userId: userId}});
    })
  }

}
