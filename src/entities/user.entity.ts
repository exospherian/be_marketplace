import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';


@Entity()
export class User extends BaseEntity{

	constructor (
		email: string, 
		password: string, 
		id: string = uuidv4(),
	) {
		super();
		this.id = id;
		this.email = email;
		this.password = password;
	}

	@PrimaryGeneratedColumn('uuid', {name: 'id'})
  	id: string;

	@Column({
	unique: true,
	nullable: false,
	type: 'varchar',
  	})
  	email: string;

	@Column({
	nullable: false,
	type: 'varchar',
	})
	password: string;
}