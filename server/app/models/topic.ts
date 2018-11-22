import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {User} from "./user";

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

}
