import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { ShowBooksPerUser } from './dto/showbooksperuser.dto';
import { UpdateUserDto } from './dto/updateUserId.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create_user') // create user
  createUser(@Body() createUserDto: CreateUserDto) {
    this.userService.createUser(createUserDto);
  }

  @Get('all_user') // get all users
  async getUser() {
    return await this.userService.finduser();
  }

  @Put(':id') // update user
  updateUserById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id') // delete user
  deleteUserById(@Param('id', ParseIntPipe) id: number) {
    this.userService.deleteUser(id);
  }

  @Get('getBookByUserId') // get book by user
  getBookByUserId(@Body() showBooksPerUser: ShowBooksPerUser) {
    return this.userService.getbooksByUserId(showBooksPerUser);
  }

  @Get('allBooksUsers')
  allbooksusers() {
    return this.userService.allbooksandusers();
  }
}
