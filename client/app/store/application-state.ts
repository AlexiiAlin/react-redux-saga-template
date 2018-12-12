import { TopicsState } from '../components/Topics/store/topics-state';
import { TopicState } from '../components/Topic/store/topic-state';
import { CreateTopicState } from '../components/CreateTopic/store/create-topic-state';
import { LoginState } from '../components/Login/store/login-state';
import { UserProfileState } from '../components/NavBar/store/nav-bar';
import { SignupState } from "../components/Signup/store/signup-state";
import { ProfileState } from '../components/Profile/store/profile-state';

export interface ApplicationState {
  topics: TopicsState,
  topic: TopicState,
  createTopic: CreateTopicState,
  login: LoginState,
  signup: SignupState,
  userProfile: UserProfileState,
  profile: ProfileState
}
