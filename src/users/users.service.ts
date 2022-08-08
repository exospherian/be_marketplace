import { Injectable } from '@nestjs/common';
import { User } from '../entity';

@Injectable()
export class UsersService {

	private readonly users: User[] = [];

	create(user: User) {
	  this.users.push(user);
	}
  
	findAll(): User[] {
	  return this.users;
	}

}
