import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBooksDto } from './dto/createBooks.dto';
import { UpdateBooksDto } from './dto/updateBooks.dto';

@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Post('create_books') // create book
  createBooks(@Body() createBooksDto: CreateBooksDto) {
    this.bookService.createBooks(createBooksDto);
  }

  @Get('books') //
  showBooks() {
    return this.bookService.showBooks();
  }

  @Get('books_by_student_id/:id') //
  showBooksStdId(@Param('id', ParseIntPipe) id: number) {
    return this.bookService.showBooksStd(id);
  }

  @Put('updatebook/:id') // update books
  updateBooks(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBooksDto: UpdateBooksDto,
  ) {
    this.bookService.updateBooks(id, updateBooksDto);
  }
}
