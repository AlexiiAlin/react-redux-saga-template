import { BodyParams, Controller, Get, Post } from '@tsed/common';
import { Topic } from '../models/topic';
import { LoginService } from './login-service';

@Controller('/api/login')
export class LoginController {

  constructor(private loginService: LoginService) {}

  @Post('/')
  public login(@BodyParams() credentials: {userName: string, passowrd: string}) {
    return this.loginService.authenticate(credentials);
  }
}
