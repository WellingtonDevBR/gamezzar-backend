import { Entity } from "../../@seedowrk/domain/entity";

interface MessageProps {
  id?: string;
  chatId: string;
  senderId: string;
  receiverId: string;
  content: string;
}

export class Message extends Entity<MessageProps> {
  private constructor(props: MessageProps, id?: string) {
    super(props, id);
  }

  static createMessage(props: MessageProps, id?: string) {
    const user = new Message(props, id);
    return user;
  }

  getAllMessageInformation(): MessageProps {
    return { ...this.props, id: this.getId() };
  }
}
