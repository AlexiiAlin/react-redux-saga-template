import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {User} from "./user";
import { Comment } from './comment';
import { UserLikesTopic } from './userLikeTopic';

@Entity({name: 'Topics'})
export class Topic {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'title'})
  title: string;

  @Column({name: 'description'})
  description: string;

  @Column({name: 'url'})
  url: string;

  @Column({name: 'userId'})
  userId: number;

  @ManyToOne(type => User, user => user.topics)
  user: User;

  @OneToMany(type => Comment, comment => comment.topic)
  comments: Comment[];

  @OneToMany(type => UserLikesTopic, userLikesTopic => userLikesTopic.topic)
  userLikesTopic: UserLikesTopic[];
}
