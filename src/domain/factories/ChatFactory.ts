import { Chat } from "../entities/Chat";

export class ChatFactory {
  static create(user1Id: string, user2Id: string, gameId: string): Chat {
    return Chat.createChat({
      user1Id,
      user2Id,
      gameId,
    });
  }
}
