import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { convertObjectToSnakeCase } from "../../../../@seedowrk/helper/objectConverter";
import { IMessageRepository } from "../../../../domain/repository/IMessageRepository";

interface Input {
  chatId: string;
}
interface Output {}

export class RetrieveAllMessagesByChatIdUseCase
  implements UseCase<Input, Output>
{
  constructor(private messageRepository: IMessageRepository) {}
  async execute(input: Input): Promise<Output> {
    const chat = await this.messageRepository.retrieveAllMensagesByChatId(
      input.chatId
    );
    const formattedChat = convertObjectToSnakeCase(chat);
    return formattedChat;
  }
}
