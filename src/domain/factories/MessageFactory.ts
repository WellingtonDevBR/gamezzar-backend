import { Message } from "../entities/Message";
import { UserConversation } from "../entities/UserConversation";

export class MessageFactory {
  static create(
    chatId: string,
    senderId: string,
    receiverId: string,
    content: string
  ): Message {
    return Message.createMessage({
      chatId,
      senderId,
      receiverId,
      content,
    });
  }
}
