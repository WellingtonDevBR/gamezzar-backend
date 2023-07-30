import { Entity } from "../../@seedowrk/domain/entity";

export interface IUserConversation {
  messageId: string;
  content: string;
  senderId: string;
  receiverId: string;
  gameId: string;
  status: string;
}

export class UserConversation extends Entity<IUserConversation> {
  private constructor(props: IUserConversation) {
    super(props);
  }

  static createUserConversation(props: IUserConversation) {
    const message = new UserConversation(props);
    return message;
  }
}
