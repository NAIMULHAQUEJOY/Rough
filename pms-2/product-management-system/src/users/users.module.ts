import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from '../entities/user.entity';  // Make sure the path is correct

@Module({
  imports: [TypeOrmModule.forFeature([User])],  // Register the User repository
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
