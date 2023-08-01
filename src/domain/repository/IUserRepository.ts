import { User } from "../entities/User";

export interface ICreateUserDataOutput {
  first_name: string;
  last_name: string;
  user_name: string;
  email: string;
}

export interface IUserRepository {
  save(user: User): Promise<ICreateUserDataOutput>;
  get(id: string): Promise<User>;
  getByEmail(email: string): Promise<any>;
  getById(id: string): Promise<any>;
  getByUserName(name: string): Promise<any>;
  getAll(): Promise<any>;
  add(user: User): Promise<void>;
  update(user: any): Promise<void>;
}
