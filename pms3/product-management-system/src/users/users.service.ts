// users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(options: FindOneOptions<User>): Promise<User | undefined> {
    const result = await this.usersRepository.findOne(options);
    return result ?? undefined;  // Convert null to undefined
}

async update(id: number, user: User): Promise<User> {
  // Destructure to exclude 'id' from the rest of the properties if included in the user object
  const { id: userId, ...updateData } = user;

  const updatedUser = await this.usersRepository.preload({
      id: id,
      ...updateData,
  });

  if (!updatedUser) {
      throw new Error(`User with ID ${id} not found.`);
  }

  return this.usersRepository.save(updatedUser);
}


 

 

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
