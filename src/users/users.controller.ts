import { Controller, Get, Req, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto, UserViewDto } from '../dto';
import { plainToClass } from 'class-transformer';
import { User } from '../entities';
@Controller('users')
export class UsersController {

	constructor(private usersService: UsersService) {}


	@Get('findall')
	findAll(): Promise<User[]> {
	  return this.usersService.findAll();
	}
	
	@Post('/signup')
	async signup (
		@Body() { email, password }: UserDto,
	): Promise<UserViewDto> {
		const createdUser = await this.usersService.createUser(
			email, 
			password,
		);
		return plainToClass(UserViewDto, createdUser);
	}

	@Post()
  	create(): string {
    return 'This action adds a new user';
  }
}
