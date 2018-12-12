import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Topic} from "./topic";
import { Comment } from './comment';
import { UserLikesTopic } from './userLikeTopic';

@Entity({name: 'Users'})
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'firstName'})
  firstName: string;

  @Column({name: 'lastName'})
  lastName: string;

  @Column({name: 'username'})
  username: string;

  @Column({name: 'gender'})
  gender: boolean;

  @Column({name: 'password', select: false})
  password: string;

  @OneToMany(type => Topic, topic => topic.user)
  topics: Topic[];

  @OneToMany(type => Comment, comment => comment.user)
  comments: Comment[];

  @OneToMany(type => UserLikesTopic, userLikesTopic => userLikesTopic.user)
  userLikesTopic: UserLikesTopic[];

}
