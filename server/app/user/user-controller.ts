import {  Controller, Get, Request } from '@tsed/common';
import { Forbidden } from 'ts-httpexceptions';

@Controller('/api/userProfile/me')
export class UserController {

  constructor() {}

  @Get('/')
  public getUserProfileInfo(@Request() request: any) {
    if(request.user === null || request.user === undefined) {
      return {isAuthenticated: false, userName: null};
    }
    return {isAuthenticated: true, userName: request.user.username};
  }
}
