"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAssociations = void 0;
const Address_1 = require("./models/Address");
const Edition_1 = require("./models/Edition");
const Game_1 = require("./models/Game");
const Platform_1 = require("./models/Platform");
const Propose_1 = require("./models/Propose");
const Region_1 = require("./models/Region");
const User_1 = require("./models/User");
const UserGame_1 = require("./models/UserGame");
const Wishlist_1 = require("./models/Wishlist");
function setupAssociations() {
    User_1.UserModel.belongsToMany(Game_1.GameModel, {
        through: "Inventory",
        foreignKey: "UserId",
        as: "game",
    });
    Propose_1.ProposeModel.belongsTo(User_1.UserModel, {
        foreignKey: "InterestedUserId",
        as: "sender",
    });
    Propose_1.ProposeModel.belongsTo(User_1.UserModel, {
        foreignKey: "OwnerUserId",
        as: "receiver",
    });
    Propose_1.ProposeModel.belongsTo(Game_1.GameModel, {
        foreignKey: "InterestedGameId",
        as: "sender_game",
    });
    Propose_1.ProposeModel.belongsTo(Game_1.GameModel, {
        foreignKey: "OwnerGameId",
        as: "receiver_game",
    });
    Game_1.GameModel.belongsToMany(User_1.UserModel, {
        through: "Inventory",
        foreignKey: "GameId",
        as: "user",
    });
    Game_1.GameModel.belongsToMany(Platform_1.PlatformModel, {
        through: "Games_Platform",
        foreignKey: "GameId",
        as: "platform",
    });
    Game_1.GameModel.belongsToMany(Region_1.RegionModel, {
        through: "Games_Region",
        foreignKey: "GameId",
        as: "region",
    });
    Game_1.GameModel.hasMany(UserGame_1.UserGameModel, {
        foreignKey: "GameId",
        as: "inventory",
    });
    Game_1.GameModel.belongsToMany(Edition_1.EditionModel, {
        through: "Games_Edition",
        foreignKey: "GameId",
        as: "edition",
    });
    UserGame_1.UserGameModel.hasMany(User_1.UserModel, {
        foreignKey: "UserId",
        as: "user",
    });
    UserGame_1.UserGameModel.belongsTo(Game_1.GameModel, {
        foreignKey: "GameId",
        as: "details",
    });
    Address_1.AddressModel.belongsTo(User_1.UserModel, {
        foreignKey: "UserId",
        as: "user",
    });
    Wishlist_1.WishlistModel.belongsTo(Game_1.GameModel, {
        foreignKey: "GameId",
        as: "details",
    });
    Platform_1.PlatformModel.belongsToMany(Game_1.GameModel, {
        through: "Games_Platform",
        foreignKey: "PlatformId",
        as: "platform",
    });
    Region_1.RegionModel.belongsToMany(Game_1.GameModel, {
        through: "Games_Region",
        foreignKey: "RegionId",
        as: "games",
    });
    Edition_1.EditionModel.belongsToMany(Game_1.GameModel, {
        through: "Games_Edition",
        foreignKey: "EditionId",
        as: "edition",
    });
}
exports.setupAssociations = setupAssociations;
//# sourceMappingURL=associations.js.map