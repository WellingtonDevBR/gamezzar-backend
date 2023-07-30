import { Entity } from "../../@seedowrk/domain/entity";
import { Email } from "../value-objects/user/Email";
import { Name } from "../value-objects/user/Name";
import { Password } from "../value-objects/user/Password";
import { Username } from "../value-objects/user/Username";

interface UserProps {
  id?: string;
  firstName: Name;
  lastName: Name;
  username: Username;
  avatar?: string;
  email: Email;
  password: Password;
}

export class User extends Entity<UserProps> {
  private constructor(props: UserProps, id?: string) {
    super(props, id);
  }

  static createUser(props: UserProps, id?: string) {
    const user = new User(props, id);
    return user;
  }

  getAllUserInformation(): UserProps {
    return { ...this.props, id: this.getId() };
  }
}