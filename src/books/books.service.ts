import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Books } from 'src/typeorm/entities/Books';
import { User } from 'src/typeorm/entities/User';
import { CreateBooksParams, UpdateBooks } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Books) private booksRepository: Repository<Books>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  createBooks(bookDetails: CreateBooksParams) {
    const newBook = this.booksRepository.create({
      ...bookDetails,
      createdAt: new Date(),
    });
    return this.booksRepository.save(newBook);
  }

  showBooks() {
    return this.booksRepository.find();
  }

  showBooksStd(id: number) {
    const temp = this.booksRepository.find({
      where: {
        userId: id,
      },
    });
    return temp;
  }

  updateBooks(id: number, updateBooks: UpdateBooks) {
    this.booksRepository.update({ book_id: id }, { ...updateBooks });
  }
}
