import {
  ICreateUserDataOutput,
  IUserRepository,
} from "../../../../../domain/repository/IUserRepository";
import { User } from "../../../../../domain/entities/User";
import { UserModel } from "../../models/User";

export class SqlServerUserRepository implements IUserRepository {
  async save(user: User): Promise<ICreateUserDataOutput> {
    const { id, firstName, lastName, username, avatar, email, password } =
      user.getAllUserInformation();
    const userData = {
      UserID: id,
      FirstName: firstName.value,
      LastName: lastName.value,
      UserName: username.value,
      Avatar: avatar,
      Email: email.value,
      Password: password.value,
      RegistrationDate: new Date(),
    };
    const createdUser = await UserModel.create(userData);
    const outputData: ICreateUserDataOutput = {
      first_name: createdUser.FirstName,
      last_name: createdUser.LastName,
      user_name: createdUser.UserName,
      email: createdUser.Email,
    };
    return outputData;
  }

  async get(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }

  async getAll(): Promise<any> {
    const users = await UserModel.findAll({
      raw: true,
    });
    return users;
  }

  async getByEmail(email: string): Promise<any> {
    const user = await UserModel.findOne({
      raw: true,
      where: {
        Email: email,
      },
    });
    return user;
  }

  async getById(id: string): Promise<any> {
    return await UserModel.findOne({
      raw: true,
      where: {
        UserID: id,
      },
    });
  }

  async getByUserName(name: string): Promise<any> {
    const user = await UserModel.findOne({
      raw: true,
      where: {
        UserName: name,
      },
    });
    return user;
  }

  async add(user: User): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async update(user: User): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
