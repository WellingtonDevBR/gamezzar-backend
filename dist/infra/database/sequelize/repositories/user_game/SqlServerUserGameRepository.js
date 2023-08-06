"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlServerUserGameRepository = void 0;
const sequelize_1 = require("sequelize");
const Address_1 = require("../../models/Address");
const Edition_1 = require("../../models/Edition");
const Game_1 = require("../../models/Game");
const Platform_1 = require("../../models/Platform");
const Region_1 = require("../../models/Region");
const User_1 = require("../../models/User");
const UserGame_1 = require("../../models/UserGame");
const Wishlist_1 = require("../../models/Wishlist");
class SqlServerUserGameRepository {
    async createOrUpdate(userGame) {
        return await UserGame_1.UserGameModel.findOne({
            where: { UserId: userGame.userId, GameId: userGame.gameId },
        }).then(async function (obj) {
            if (obj)
                return obj.update({
                    UserId: userGame.userId,
                    GameId: userGame.gameId,
                    RegionId: userGame.regionId,
                    PlatformId: userGame.platformId,
                    EditionId: userGame.editionId,
                    Satisfaction: userGame.satisfaction,
                    Disposition: userGame.disposition,
                    DiscCondition: userGame.disc_condition,
                    CoverCondition: userGame.cover_condition,
                    ManualCondition: userGame.manual_condition,
                    Description: userGame.description,
                });
            return await UserGame_1.UserGameModel.create({
                UserId: userGame.userId,
                GameId: userGame.gameId,
                RegionId: userGame.regionId,
                PlatformId: userGame.platformId,
                EditionId: userGame.editionId,
                Satisfaction: userGame.satisfaction,
                Disposition: userGame.disposition,
                DiscCondition: userGame.disc_condition,
                CoverCondition: userGame.cover_condition,
                ManualCondition: userGame.manual_condition,
                Description: userGame.description,
            });
        });
    }
    async getById(id) {
        const data = await Game_1.GameModel.findOne({
            raw: true,
            nest: true,
            where: {
                GameId: id,
            },
            include: [
                {
                    model: User_1.UserModel,
                    as: "user",
                    include: [
                        {
                            model: Wishlist_1.WishlistModel,
                            as: "wishlist",
                            include: [
                                {
                                    model: Game_1.GameModel,
                                    as: "details",
                                },
                            ],
                        },
                        {
                            model: Address_1.AddressModel,
                            as: "address",
                            required: false,
                        },
                    ],
                },
                {
                    model: Edition_1.EditionModel,
                    as: "edition",
                },
                {
                    model: Region_1.RegionModel,
                    as: "region",
                },
            ],
        });
        return data;
    }
    async getAll(offset, userId) {
        let whereCondition = {};
        if (userId !== undefined && userId !== null) {
            whereCondition = {
                [sequelize_1.Op.not]: [
                    {
                        "$user.UserId$": userId,
                    },
                ],
            };
        }
        const data = await UserGame_1.UserGameModel.findAll({
            raw: true,
            nest: true,
            limit: 10,
            offset: offset,
            include: [
                {
                    model: Game_1.GameModel,
                    as: "item",
                    include: [
                        {
                            model: Platform_1.PlatformModel,
                            as: "platform",
                        },
                        {
                            model: Region_1.RegionModel,
                            as: "region",
                        },
                        {
                            model: Edition_1.EditionModel,
                            as: "edition",
                        },
                    ],
                },
                {
                    model: User_1.UserModel,
                    as: "user",
                    include: [
                        {
                            model: Address_1.AddressModel,
                            as: "address",
                        },
                    ],
                    where: whereCondition,
                    required: true,
                },
            ],
        });
        return data;
    }
    async getAllByUserId(userId) {
        const data = await UserGame_1.UserGameModel.findAll({
            raw: true,
            nest: true,
            where: { UserId: userId },
            include: [
                {
                    model: Game_1.GameModel,
                    as: "item",
                    include: [
                        {
                            model: Platform_1.PlatformModel,
                            as: "platform",
                        },
                        {
                            model: Region_1.RegionModel,
                            as: "region",
                        },
                        {
                            model: Edition_1.EditionModel,
                            as: "edition",
                        },
                    ],
                },
            ],
        });
        return data;
    }
    async getByGameId(gameId) {
        const data = await UserGame_1.UserGameModel.findAll({
            raw: true,
            nest: true,
            where: { GameId: gameId },
            include: [
                {
                    model: User_1.UserModel,
                    as: "user",
                    include: [
                        {
                            model: Address_1.AddressModel,
                            as: "address",
                        },
                    ],
                },
            ],
        });
        return data;
    }
    async getByUserId(userId, gameId) {
        const data = await UserGame_1.UserGameModel.findOne({
            raw: true,
            nest: true,
            where: { UserId: userId, GameId: gameId },
        });
        return data;
    }
    async getPopularCollectionByUserId() {
        try {
            const collectionResult = await UserGame_1.UserGameModel.findAll({
                attributes: [
                    "UserId",
                    [
                        sequelize_1.Sequelize.fn("COUNT", sequelize_1.Sequelize.fn("DISTINCT", sequelize_1.Sequelize.col("GameId"))),
                        "collectionCount",
                    ],
                ],
                group: ["UserId"],
                raw: true,
            });
            const sortedUsers = collectionResult.sort((a, b) => b.collectionCount - a.collectionCount);
            const top2Users = sortedUsers.slice(0, 2);
            const top2UsersWithCollections = await Promise.all(top2Users.map(async (user) => {
                const userGames = await UserGame_1.UserGameModel.findAll({
                    where: { UserId: user.UserId },
                    attributes: ["UserId", "GameId"],
                    include: [
                        {
                            model: Game_1.GameModel,
                            as: "item",
                            attributes: ["GameId", "Image", "Title"],
                        },
                        {
                            model: User_1.UserModel,
                            as: "user",
                            attributes: ["UserId", "UserName", "Avatar"],
                        },
                    ],
                    limit: 4,
                    nest: true,
                    raw: true,
                });
                return { userId: user.UserId, userGames };
            }));
            const resultArray = [];
            for (const userWithCollections of top2UsersWithCollections) {
                const { userId, userGames } = userWithCollections;
                const gamesForUserId = gatherGamesForUserId(userId, top2UsersWithCollections);
                const { UserName, Avatar } = userGames[0]?.user;
                resultArray.push({
                    UserId: userId,
                    games: gamesForUserId,
                    UserName,
                    Avatar,
                });
            }
            return resultArray;
        }
        catch (error) {
            console.log(error);
            return [];
        }
    }
}
exports.SqlServerUserGameRepository = SqlServerUserGameRepository;
function gatherGamesForUserId(userId, data) {
    const userGames = data.find((entry) => entry.userId === userId)?.userGames || [];
    return userGames.map((game) => game.item);
}
//# sourceMappingURL=SqlServerUserGameRepository.js.map