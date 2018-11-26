import { OrmConfigService } from '../services/ormconfig-service';
import { Connection } from 'typeorm';
import { User } from '../models/user';
import { Service } from '@tsed/common';

@Service()
export class LoginService {

  constructor( private ormConfigService: OrmConfigService) {}

  authenticate(credentials) {
    return this.ormConfigService.connection.then((connection: Connection) => {
      return connection.getRepository(User)
        .findOne({
          username: credentials.userName,
          password: credentials.password
        });
    })
  }
}
