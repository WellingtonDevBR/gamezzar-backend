import { User } from "../entities/User";
import { Address } from "../value-objects/user/Address";
import { Email } from "../value-objects/user/Email";
import { Name } from "../value-objects/user/Name";
import { Password } from "../value-objects/user/Password";
import { Username } from "../value-objects/user/Username";

export class UserFactory {
  static create(
    firstname: string,
    lastname: string,
    username: string,
    avatar: string,
    email: string,
    password: string
  ): User {
    return User.createUser({
      firstName: new Name(firstname),
      lastName: new Name(lastname),
      username: new Username(username),
      avatar,
      email: new Email(email),
      password: new Password(password),
    });
  }
}
