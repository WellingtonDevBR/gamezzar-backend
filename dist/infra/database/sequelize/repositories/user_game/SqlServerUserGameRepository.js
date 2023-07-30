"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlServerUserGameRepository = void 0;
const Edition_1 = require("../../models/Edition");
const Game_1 = require("../../models/Game");
const Platform_1 = require("../../models/Platform");
const Region_1 = require("../../models/Region");
const User_1 = require("../../models/User");
const UserGame_1 = require("../../models/UserGame");
class SqlServerUserGameRepository {
    async createOrUpdate(userGame) {
        console.log(userGame);
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
    async getAll() {
        const data = await Game_1.GameModel.findAll({
            raw: true,
            nest: true,
            include: [
                {
                    model: User_1.UserModel,
                    as: "user",
                },
                {
                    model: Edition_1.EditionModel,
                    as: "edition",
                },
                {
                    model: Region_1.RegionModel,
                    as: "region",
                }
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
                    as: "details",
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
}
exports.SqlServerUserGameRepository = SqlServerUserGameRepository;
//# sourceMappingURL=SqlServerUserGameRepository.js.map