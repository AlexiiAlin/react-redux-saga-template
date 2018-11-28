import { TopicsState } from '../components/Topics/store/topics-state';
import { TopicState } from '../components/Topic/store/topic-state';
import { CreateTopicState } from '../components/CreateTopic/store/create-topic-state';
import { LoginState } from '../components/Login/store/login-state';
import { UserProfileState } from '../components/NavBar/store/nav-bar';

export interface ApplicationState {
  topics: TopicsState,
  topic: TopicState,
  createTopic: CreateTopicState,
  login: LoginState,
  userProfile: UserProfileState
}
