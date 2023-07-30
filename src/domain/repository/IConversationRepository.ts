import { Chat } from "../entities/Chat";

export interface IConversationRepository {
  getByUsers(userOneId: string, userTwoId: string): Promise<Chat | null>;
  save(conversation: Chat): Promise<void>;
}
