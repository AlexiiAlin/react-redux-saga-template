import * as Passport from "passport";
import {Strategy} from "passport-local";
import {
  Service,
  BeforeRoutesInit,
  AfterRoutesInit,
  ServerSettingsService,
  ExpressApplication,
  Inject
} from "@tsed/common";
import {UserService} from "../user/user-service";
import {BadRequest, NotFound} from "@tsed/exceptions";

@Service()
export class PassportLocalService implements BeforeRoutesInit, AfterRoutesInit {

  constructor(private serverSettings: ServerSettingsService,
              private userService: UserService,
              @Inject(ExpressApplication) private  expressApplication: ExpressApplication) {

  }

  $beforeRoutesInit() {
    const options: any = this.serverSettings.get("passport") || {} as any;
    const {userProperty, pauseStream} = options; // options stored with ServerSettings

    this.expressApplication.use(Passport.initialize({userProperty}));
    this.expressApplication.use(Passport.session({pauseStream}));
  }

  public initializeSignup() {

    Passport
      .use("signup", new Strategy({
          // by default, local strategy uses username and password, we will override with email
          usernameField: "username",
          passwordField: "password",
          passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        (req, username, password, done) => {
          // const {firstName, lastName} = req.body;
          // asynchronous
          // User.findOne wont fire unless data is sent back
          process.nextTick(() => {
            this.signup({
              username,
              password
            })
              .then((user) => done(null, user))
              .catch((err) => done(err));
          });
        }));

  }

  public initializeLogin() {
    Passport.use("login", new Strategy({
      // by default, local strategy uses username and password, we will override with email
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true // allows us to pass back the entire request to the callback
    }, (req, username, password, done) => {
      this.login(username, password)
        .then((user) => done(null, user))
        .catch((err) => done(err));
    }));
  }

  async login(username: string, password: string) {
    const user = await this.userService.findByCredentials(username, password);
    if (user) {
      return user;
    }

    throw new NotFound("User not found");
  }

  /**
   *
   * @param user
   * @returns {Promise<any>}
   */
  async signup(user) {

    const exists = await this.userService.findByUserName(user.username);

    if (exists) { //User exists
      throw new BadRequest("Email is already registered");
    }

    // Promise

    // Create new User
    return await this.userService.create(<any>{
      username: user.username,
      password: user.password,
    });
  }

  $afterRoutesInit() {
    this.initializeSignup();
    this.initializeLogin();
  }
}
