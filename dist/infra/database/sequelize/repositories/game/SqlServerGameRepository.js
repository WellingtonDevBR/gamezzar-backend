"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlServerGameRepository = void 0;
const sequelize_1 = require("sequelize");
const Game_1 = require("../../models/Game");
const UserGame_1 = require("../../models/UserGame");
const User_1 = require("../../models/User");
const Platform_1 = require("../../models/Platform");
const Region_1 = require("../../models/Region");
const Edition_1 = require("../../models/Edition");
class SqlServerGameRepository {
    async create(game) {
        const data = game.getAllUserInformation();
        return await Game_1.GameModel.create({
            Title: data.title,
            Description: data.description,
            ReleaseDate: new Date(),
            Producer: data.producer,
            OfficialLink: data.officialLink,
            Image: data.image,
            Slug: data.slug,
            Status: 1,
        });
    }
    async getAll() {
        return await Game_1.GameModel.findAll({
            raw: true,
            nest: true,
            include: [
                {
                    model: Edition_1.EditionModel,
                    as: "edition",
                },
            ],
        });
    }
    async getById(gameId) {
        const data = await Game_1.GameModel.findOne({
            raw: true,
            nest: true,
            where: { GameId: gameId },
            include: [
                {
                    model: User_1.UserModel,
                    as: "user",
                },
                {
                    model: UserGame_1.UserGameModel,
                    as: "inventory",
                },
                {
                    model: Platform_1.PlatformModel,
                    as: "platform",
                },
                {
                    model: Region_1.RegionModel,
                    as: "region",
                },
            ],
        });
        return data;
    }
    async searchByName(name) {
        return await Game_1.GameModel.findAll({
            raw: true,
            nest: true,
            where: {
                Title: {
                    [sequelize_1.Op.like]: `%${name}%`,
                },
            },
            limit: 5,
        });
    }
}
exports.SqlServerGameRepository = SqlServerGameRepository;
//# sourceMappingURL=SqlServerGameRepository.js.map