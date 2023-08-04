import { Follow } from "../entities/FollowId";

export interface IFollowRepository {
  create(follow: Follow): Promise<any>;
  findFollowers(followerId: string): Promise<any>;
  findFollower(followeeId: string): Promise<any>;
  unfollow(followerId: string, followeeId: string): Promise<any>;
}
