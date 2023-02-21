import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Books } from './Books';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  createdAt: Date;

  @OneToMany(() => Books, (books) => books.user, {
    onDelete: 'SET NULL',
  })
  books: Books[];
}
