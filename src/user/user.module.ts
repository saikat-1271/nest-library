import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Books } from 'src/typeorm/entities/Books';
import { User } from 'src/typeorm/entities/User';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Books])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
