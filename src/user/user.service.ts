import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Books } from 'src/typeorm/entities/Books';
import { User } from 'src/typeorm/entities/User';
import {
  CreateUserParams,
  GetbooksById,
  UpdateUserParams,
} from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Books) private booksRepository: Repository<Books>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  createUser(userDetails: CreateUserParams) {
    const newUser = this.userRepository.create({
      ...userDetails,
      createdAt: new Date(),
    });
    return this.userRepository.save(newUser);
  }

  finduser() {
    return this.userRepository.find();
  }

  updateUser(id: number, userDetails: UpdateUserParams) {
    this.userRepository.update({ id }, { ...userDetails });
  }

  deleteUser(id: number) {
    this.userRepository.delete({ id });
  }

  getbooksByUserId(getbooksById: GetbooksById) {
    return this.booksRepository.find({
      where: {
        userId: getbooksById.id,
      },
    });
  }

  allbooksandusers() {
    return this.userRepository.find({
      relations: {
        books: true,
      },
    });
  }
}
