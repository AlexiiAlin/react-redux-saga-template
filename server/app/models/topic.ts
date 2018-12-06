import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {User} from "./user";
import { Comment } from './comment';

@Entity({name: 'topics'})
export class Topic {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'title'})
  title: string;

  @Column({name: 'userId'})
  userId: number;

  @ManyToOne(type => User, user => user.topics)
  user: User;

  @OneToMany(type => Comment, comment => comment.topic)
  comments: Comment[];
}
