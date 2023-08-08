import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { convertObjectToSnakeCase } from "../../../../@seedowrk/helper/objectConverter";
import { ChatFactory } from "../../../../domain/factories/ChatFactory";
import { MessageFactory } from "../../../../domain/factories/MessageFactory";
import { IChatRepository } from "../../../../domain/repository/IChatRepository";
import { IMessageRepository } from "../../../../domain/repository/IMessageRepository";

export interface Input {
  senderId: string;
  receiverId: string;
  content: string;
  gameId: string;
}
export interface Output {
  chat_id: string;
}

export class CreateMessageUseCase implements UseCase<Input, Output> {
  constructor(
    private messageRepository: IMessageRepository,
    private chatRepository: IChatRepository
  ) {}
  async execute(input: Input): Promise<Output> {
    const existingChat = await this.chatRepository.findExistingChat(
      input.senderId,
      input.receiverId,
      input.gameId
    );
    

    if (existingChat) {
      const messageFactory = MessageFactory.create(
        existingChat.ChatId,
        input.senderId,
        input.receiverId,
        input.content
      );
      await this.messageRepository.save(messageFactory);
      return {
        chat_id: existingChat.ChatId,
      };
    }

    const chatFactory = ChatFactory.create(
      input.senderId,
      input.receiverId,
      input.gameId
    );
    const chat = await this.chatRepository.save(chatFactory);
    const messageFactory = MessageFactory.create(
      chat.chatId,
      input.senderId,
      input.receiverId,
      input.content
    );
    const message = this.messageRepository.save(messageFactory);
    const formattedMessage = convertObjectToSnakeCase(message);
    return {
      chat_id: chatFactory.getId(),
    };
  }
}
