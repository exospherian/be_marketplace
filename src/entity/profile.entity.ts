import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profile {
	@PrimaryGeneratedColumn('uuid')
  	id: number;

	@Column() 
	username: string;

	@Column()
	phone: string;

	@Column() 
	country: string;

	@Column()
	zipcode: string;

	@Column()
	address: string;

}