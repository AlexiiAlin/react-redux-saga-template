import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {User} from "./user";
import {Topic} from "./topic";

@Entity({name: 'UserLikesTopic'})
export class UserLikesTopic {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'topicId'})
  topicId: number;

  @Column({name: 'userId'})
  userId: number;

  @ManyToOne(type => User, user => user.userLikesTopic)
  user: User;

  @ManyToOne(type => Topic, topic => topic.userLikesTopic)
  topic: Topic;
}
