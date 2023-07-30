import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { convertObjectToSnakeCase } from "../../../../@seedowrk/helper/objectConverter";
import { IChatRepository } from "../../../../domain/repository/IChatRepository";
import { IUserRepository } from "../../../../domain/repository/IUserRepository";

interface Input {
  userId: string;
}
interface Output {}

export class FindChatByUserIdUseCase implements UseCase<Input, Output> {
  constructor(
    private chatRepository: IChatRepository,
    private userRepository: IUserRepository
  ) {}
  async execute(input: Input): Promise<Output> {
    const chats = await this.chatRepository.findByUserId(input.userId);

    // Get other user's Id
    const otherUserIds = chats.map((chat: any) => {
      return chat.User1Id === input.userId ? chat.User2Id : chat.User1Id;
    });

    const otherUsers = await Promise.all(
      otherUserIds.map((id: string) => this.userRepository.getById(id))
    );

    const formattedChats = chats.map((chat: any, index: number) => {
      return convertObjectToSnakeCase({
        ...chat,
        user: otherUsers[index],
      });
    });

    return formattedChats;
  }
}
