import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';

@Entity()
export class Books {
  @PrimaryGeneratedColumn()
  book_id: number;

  @Column()
  name: string;

  @Column()
  date: Date;

  @Column()
  userId: number;

  @Column()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.books)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;
}
