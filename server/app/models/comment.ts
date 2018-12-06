import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {User} from "./user";
import {Topic} from "./topic";

@Entity({name: 'comments'})
export class Comment {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'description'})
  description: string;

  @Column({name: 'topicId'})
  topicId: number;

  @Column({name: 'userId'})
  userId: number;

  @ManyToOne(type => User, user => user.comments)
  user: User;

  @ManyToOne(type => Topic, topic => topic.comments)
  topic: Topic;
}
