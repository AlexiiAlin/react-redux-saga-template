import { OrmConfigService } from '../services/ormconfig-service';
import { Connection } from 'typeorm';
import { User } from '../models/user';
import { Service } from '@tsed/common';

@Service()
export class UserService {

  constructor( private ormConfigService: OrmConfigService) {}

  findByUserName(username) {
    return this.ormConfigService.connection.then((connection: Connection) => {
      return connection.getRepository(User)
        .findOne({
          username: username,
        });
    })
  }

  findByCredentials(username, password) {
    return this.ormConfigService.connection.then((connection: Connection) => {
      return connection.getRepository(User)
        .findOne({
          username,
          password
        });
    })
  }

  public create(user) {
    return this.ormConfigService.connection.then((connection: Connection) => {
      return connection.getRepository(User).save(user);
    })
  }
}
