import { Message } from "../entities/Message";

export interface IMessageRepository {
  save(message: Message): Promise<any>;
  retrieveAllMensagesByChatId(chatId: string): Promise<any>;
}
