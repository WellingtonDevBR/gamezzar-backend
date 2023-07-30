import { Chat } from "../entities/Chat";

export interface IChatRepository {
  save(chat: Chat): Promise<any>;
  findExistingChat(
    user1Id: string,
    user2Id: string,
    gameId: string
  ): Promise<any>;
  findByUserId(userId: string): Promise<any>;
}
