import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Books } from 'src/typeorm/entities/Books';
import { User } from 'src/typeorm/entities/User';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  imports: [TypeOrmModule.forFeature([Books, User])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
