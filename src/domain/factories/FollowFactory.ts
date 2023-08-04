import { Follow } from "../entities/FollowId";

export class FollowFactory {
  static create(followerId: string, followeeId: string): Follow {
    return Follow.createFollow({ followerId, followeeId });
  }
}
