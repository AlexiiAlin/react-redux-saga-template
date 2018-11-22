import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Topic} from "./topic";

@Entity({name: 'users'})
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'username'})
  username: string;

  @OneToMany(type => Topic, topic => topic.user)
  topics: Topic[];

}
