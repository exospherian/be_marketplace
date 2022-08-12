import { Controller, Get, Req, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto, UserViewDto } from '../dto';
import { plainToClass, plainToInstance } from 'class-transformer';
import { User } from '../entities';
import { hashedPass } from '../security';
@Controller('users')
export class UsersController {


	constructor(private usersService: UsersService) {}


	@Get('/findall')
	findAll(): Promise<User[]> {
	  return this.usersService.findAll();
	}
	
	@Post('/signup')
	async signup (
		@Body() { email, password }: UserDto,
	): Promise<UserViewDto> {
		const createdUser = await this.usersService.createUser(
			email, 
			await hashedPass(password),
		);
		return plainToInstance(UserViewDto, createdUser);
	}

	@Post('/signin')
    async login (
		@Body() { email, password }: UserDto,
    ): Promise<UserViewDto> {
    	let user = this.usersService.login(email, password);
		return plainToInstance(UserViewDto, user);
    }
	
}
