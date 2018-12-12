import * as Express from "express";
import * as Passport from "passport";
import {BodyParams, Controller, Get, Post, Req, Required, Res} from "@tsed/common";
import { User } from '../models/user';

Passport.serializeUser(function(user, done) {
  done(null, user);
});

Passport.deserializeUser(function(user, done) {
  done(null, user);
});

@Controller("/passport")
export class PassportCtrl {

  @Post("/login")
  async login(@Required() @BodyParams("username") username: string,
              @Required() @BodyParams("password") password: string,
              @Req() request,
              @Res() response: Express.Response) {
    return new Promise<User>((resolve, reject) => {
      Passport
        .authenticate("login", (err, user: User) => {
          if (err) {
            reject(err);
          }

          request.logIn(user, (err) => {

            if (err) {
              reject(err);
            } else {
              resolve(user);
            }
          });
        })(request, response, () => {
          console.log("wut is dat");
        });
    });

  }

  @Post("/signup")
  async signup(@Required() @BodyParams("username") username: string,
               @Required() @BodyParams("password") password: string,
               @Req() request: Express.Request,
               @Res() response: Express.Response) {
    return new Promise((resolve, reject) => {

      Passport.authenticate("signup", (err, user: User) => {

        if (err) {
          return reject(err);
        }

        if (!user) {
          return reject(!!err);
        }

        // @ts-ignore
        request.logIn(user, (err) => {

          if (err) {
            return reject(err);
          }
          resolve(user);
        });
      })(request, response, () => {

      });
    });
  }

  @Post("/logout")
  public logout(@Req() request) {
    request.logout();
    return "Success!";
  }

}

function myStringify(obj) {
  var cache = [];

  return JSON.stringify(obj, function(key, value) {
    if (typeof value === 'object' && value !== null) {
      if (cache.indexOf(value) !== -1) {
        // Duplicate reference found
        try {
          // If this value does not reference a parent it can be deduped
          return JSON.parse(JSON.stringify(value));
        } catch (error) {
          // discard key if value cannot be deduped
          return;
        }
      }
      // Store value in our collection
      cache.push(value);
    }
    return value;
  });
}

