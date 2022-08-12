import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities';

@Injectable()
export class UsersService {
	
	constructor(
		@InjectRepository(User)
		private usersRepository: Repository<User>
	) {}

	private readonly users: User[] = [];

	async createUser(username: string, password: string): Promise<User> {
	  const user = new User(username, password);
	  await user.save();
	  return user;
	}
  
	findAll(): Promise<User[]> {
	  return this.usersRepository.find();
	}

}
