import { IUser } from 'src/interfaces/user.interface';
import { BaseEntity, Column, Entity } from 'typeorm';

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity implements IUser {
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column()
  age: number;
  @Column()
  email: string;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  role: string;
}
