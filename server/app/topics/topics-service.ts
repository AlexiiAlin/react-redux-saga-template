import {Service} from '@tsed/common';
import {Connection} from "typeorm";
import {Topic} from "../models/topic";
import {OrmConfigService} from "../services/ormconfig-service";

@Service()
export class TopicsService {

  constructor(private ormService: OrmConfigService){}

  public getTopics() {
    return this.ormService.connection.then((connection: Connection) => {
      return connection.getRepository(Topic)
        .createQueryBuilder("topic")
        .leftJoinAndSelect("topic.user", "user")
        .getMany();
    });
  }

  public getTopic(id: number) {
    return this.ormService.connection.then((connection: Connection) => {
      return connection.getRepository(Topic)
        .findOne(id);
    })
  }

  public saveTopic(topic) {
    console.log('HELLO FROM THE SERVER SIDE');

    return this.ormService.connection.then((connection: Connection) => {
      return connection.getRepository(Topic).save(topic);
    })
  }

  public deleteTopic(id: number) {
    console.log("HELLO FROM THE DELETE SIDE");

    return this.ormService.connection.then((connection: Connection) => {
      return connection.getRepository(Topic).delete(id);
    })
  }

}
