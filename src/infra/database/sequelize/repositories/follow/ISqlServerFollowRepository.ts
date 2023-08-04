import { Follow } from "../../../../../domain/entities/FollowId";
import { IFollowRepository } from "../../../../../domain/repository/IFollowRepository";
import { AddressModel } from "../../models/Address";
import { FollowModel } from "../../models/Follow";
import { UserModel } from "../../models/User";

export class SqlServerFollowRepository implements IFollowRepository {
  async create(follow: Follow): Promise<any> {
    const followInformation = follow.getAllFollowInformation();
    return await FollowModel.create({
      FollowId: follow.getId(),
      FollowerId: followInformation.followerId,
      FolloweeId: followInformation.followeeId,
    });
  }
  async findFollowers(followerId: string): Promise<any> {
    return await FollowModel.findAll({
      raw: true,
      nest: true,
      where: { FollowerId: followerId },
      attributes: [],
      include: [
        {
          model: UserModel,
          as: "followee",
          attributes: ["UserName", "FirstName", "LastName", "Avatar"],
          include: [
            {
              model: AddressModel,
              as: "address",
              attributes: ["Address"],
            },
          ],
        },
      ],
    });
  }

  async findFollower(followeeId: string): Promise<any> {
    return await FollowModel.findOne({
      raw: true,
      nest: true,
      where: { FolloweeId: followeeId },
    });
  }

  async unfollow(followerId: string, followeeId: string): Promise<any> {
    return await FollowModel.destroy({
      where: {
        FollowerId: followerId,
        FolloweeId: followeeId,
      },
    });
  }
}
