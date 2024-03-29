import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User, Profile } from './entities';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
	TypeOrmModule.forRoot({
		type: 'postgres',
		host: 'localhost',
		port: 5432,
		username: 'postgres',
		password: 'postgres',
		database: 'main',
		entities: [User, Profile],
		synchronize: true,    //this option should be eliminated later!
	  }),
	UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
	constructor(private dataSource: DataSource) {}
}
