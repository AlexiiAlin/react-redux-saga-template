import { Topic } from '../../../shared/interfaces';

export interface TopicsState {
  nr: number,
  topics: Topic[],
  isLoadingTopics: boolean,
  isLoadingDog: boolean,
  url: string
}
