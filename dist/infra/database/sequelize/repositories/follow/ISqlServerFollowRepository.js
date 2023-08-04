"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlServerFollowRepository = void 0;
const Address_1 = require("../../models/Address");
const Follow_1 = require("../../models/Follow");
const User_1 = require("../../models/User");
class SqlServerFollowRepository {
    async create(follow) {
        const followInformation = follow.getAllFollowInformation();
        return await Follow_1.FollowModel.create({
            FollowId: follow.getId(),
            FollowerId: followInformation.followerId,
            FolloweeId: followInformation.followeeId,
        });
    }
    async findFollowers(followerId) {
        return await Follow_1.FollowModel.findAll({
            raw: true,
            nest: true,
            where: { FollowerId: followerId },
            attributes: [],
            include: [
                {
                    model: User_1.UserModel,
                    as: "followee",
                    attributes: ["UserName", "FirstName", "LastName", "Avatar"],
                    include: [
                        {
                            model: Address_1.AddressModel,
                            as: "address",
                            attributes: ["Address"],
                        },
                    ],
                },
            ],
        });
    }
    async findFollower(followeeId) {
        return await Follow_1.FollowModel.findOne({
            raw: true,
            nest: true,
            where: { FolloweeId: followeeId },
        });
    }
    async unfollow(followerId, followeeId) {
        return await Follow_1.FollowModel.destroy({
            where: {
                FollowerId: followerId,
                FolloweeId: followeeId,
            },
        });
    }
}
exports.SqlServerFollowRepository = SqlServerFollowRepository;
//# sourceMappingURL=ISqlServerFollowRepository.js.map