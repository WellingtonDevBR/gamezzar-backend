import { Entity } from "../../@seedowrk/domain/entity";

interface ChatProps {
  id?: string;
  user1Id: string;
  user2Id: string;
  gameId: string;
}

export class Chat extends Entity<ChatProps> {
  private constructor(props: ChatProps, id?: string) {
    super(props, id);
  }

  static createChat(props: ChatProps, id?: string) {
    const chat = new Chat(props, id);
    return chat;
  }

  getAllChatInformation(): ChatProps {
    return { ...this.props, id: this.getId() };
  }
}
