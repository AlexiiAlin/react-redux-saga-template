import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Topic} from "./topic";
import { Comment } from './comment';

@Entity({name: 'users'})
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'username'})
  username: string;

  @Column({name: 'password', select: false})
  password: string;

  @OneToMany(type => Topic, topic => topic.user)
  topics: Topic[];

  @OneToMany(type => Comment, comment => comment.user)
  comments: Comment[];

}
