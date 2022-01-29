import {Authenticated, BodyParams, Controller, Get, Post, Request} from '@tsed/common';
import {Topic} from "../models/topic";
import {User} from "../models/user";
import {UserService} from "./user-service";

@Controller('/api/userProfile')
export class UserController {

  constructor(private userService: UserService) {}

  @Get('/me')
  public getUserProfileInfo(@Request() request: any) {
    if(request.user === null || request.user === undefined) {
      return {isAuthenticated: false, userName: null};
    }
    return {
      isAuthenticated: true,
      userName: request.user.username,
      firstName: request.user.firstName,
      lastName: request.user.lastName,
      userId: request.user.id,
      gender: request.user.gender
    };
  }

  @Post('/signup')
  public signupUser(@Request() request: any) {
    const user = request.body;
    return this.userService.create(user);
  }

  @Post('/update')
  @Authenticated()
  public updateUser(@Request() request: any) {
    const user = request.body;
    user.id = request.user.id;
    return this.userService.create(user);
  }

}
