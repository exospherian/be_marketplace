import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities';
import { compare } from 'bcrypt';

@Injectable()
export class UsersService {
	
	constructor(
		@InjectRepository(User)
		private usersRepository: Repository<User>
	) {}

	private readonly users: User[] = [];

	async createUser(username: string, hashedPassword: string): Promise<User> {
	  const user = new User(username, hashedPassword);
	  await user.save();
	  return user;
	}
  
	findAll(): Promise<User[]> {
	  return this.usersRepository.find();
	}

	async login(email: string, password: string): Promise<User> {
		let user = await this.usersRepository.findOne({ where: { email } });
		if(!user) {
			throw new Error('User with such email does not exist.');
		}
		const hashComparison = await compare(password, user.password);
		if(!hashComparison) {
			throw new Error('Wrong password.');
		}
		return user;
	}

}
