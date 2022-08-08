import { Controller, Get, Req, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

	constructor(private usersService: UsersService) {}


	// @Get()
	// findAll(@Req() request: Request): string {
	//   return 'This action returns all users';
	// }
	
	@Post()
  	create(): string {
    return 'This action adds a new user';
  }
}
