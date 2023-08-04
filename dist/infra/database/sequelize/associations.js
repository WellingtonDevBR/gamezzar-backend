"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAssociations = void 0;
const Address_1 = require("./models/Address");
const Edition_1 = require("./models/Edition");
const Feedback_1 = require("./models/Feedback");
const Follow_1 = require("./models/Follow");
const Game_1 = require("./models/Game");
const Platform_1 = require("./models/Platform");
const Preference_1 = require("./models/Preference");
const Propose_1 = require("./models/Propose");
const Region_1 = require("./models/Region");
const Transaction_1 = require("./models/Transaction");
const User_1 = require("./models/User");
const UserGame_1 = require("./models/UserGame");
const Wishlist_1 = require("./models/Wishlist");
function setupAssociations() {
    User_1.UserModel.belongsToMany(Game_1.GameModel, {
        through: "Inventory",
        foreignKey: "UserId",
        as: "game",
    });
    User_1.UserModel.hasMany(UserGame_1.UserGameModel, {
        foreignKey: "UserId",
        as: "collections",
    });
    User_1.UserModel.hasOne(Address_1.AddressModel, {
        foreignKey: "UserId",
        as: "address",
    });
    User_1.UserModel.hasOne(Preference_1.PreferenceModel, {
        foreignKey: "UserId",
        as: "preference",
    });
    User_1.UserModel.hasMany(UserGame_1.UserGameModel, {
        foreignKey: "UserId",
        as: "inventory",
    });
    User_1.UserModel.hasMany(Wishlist_1.WishlistModel, {
        foreignKey: "UserId",
        as: "wishlist",
    });
    User_1.UserModel.hasMany(Feedback_1.FeedbackModel, {
        foreignKey: "GiverId",
        as: "feedback_giver",
    });
    User_1.UserModel.hasMany(Feedback_1.FeedbackModel, {
        foreignKey: "ReceiverId",
        as: "feedback_receiver",
    });
    User_1.UserModel.hasMany(Follow_1.FollowModel, {
        foreignKey: "FollowerId",
        as: "userFollowers",
    });
    Propose_1.ProposeModel.belongsTo(User_1.UserModel, {
        foreignKey: "BidderId",
        as: "bidder",
    });
    Propose_1.ProposeModel.belongsTo(User_1.UserModel, {
        foreignKey: "ReceiverId",
        as: "receiver",
    });
    Propose_1.ProposeModel.belongsTo(Game_1.GameModel, {
        foreignKey: "BidderGameId",
        as: "bidder_game",
    });
    Propose_1.ProposeModel.belongsTo(Game_1.GameModel, {
        foreignKey: "ReceiverGameId",
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
        as: "item",
    });
    UserGame_1.UserGameModel.belongsTo(Region_1.RegionModel, {
        foreignKey: "RegionId",
        as: "hasregion",
    });
    UserGame_1.UserGameModel.belongsTo(Platform_1.PlatformModel, {
        foreignKey: "PlatformId",
        as: "hasplatform",
    });
    Address_1.AddressModel.belongsTo(User_1.UserModel, {
        foreignKey: "UserId",
        as: "user",
    });
    Wishlist_1.WishlistModel.belongsTo(Game_1.GameModel, {
        foreignKey: "GameId",
        as: "details",
    });
    Wishlist_1.WishlistModel.belongsTo(User_1.UserModel, {
        foreignKey: "UserId",
        as: "user",
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
    Preference_1.PreferenceModel.belongsTo(User_1.UserModel, {
        foreignKey: "UserId",
        as: "user",
    });
    Transaction_1.TransactionModel.belongsTo(User_1.UserModel, {
        foreignKey: "BidderId",
        as: "bidder",
    });
    Transaction_1.TransactionModel.belongsTo(User_1.UserModel, {
        foreignKey: "ReceiverId",
        as: "receiver",
    });
    Transaction_1.TransactionModel.belongsTo(Game_1.GameModel, {
        foreignKey: "BidderGameId",
        as: "bidder_game",
    });
    Transaction_1.TransactionModel.belongsTo(Game_1.GameModel, {
        foreignKey: "ReceiverGameId",
        as: "receiver_game",
    });
    Transaction_1.TransactionModel.hasOne(Feedback_1.FeedbackModel, {
        foreignKey: "TransactionId",
        as: "feedback",
    });
    Feedback_1.FeedbackModel.belongsTo(User_1.UserModel, {
        foreignKey: "GiverId",
        as: "feedback_giver",
    });
    Feedback_1.FeedbackModel.belongsTo(User_1.UserModel, {
        foreignKey: "ReceiverId",
        as: "feedback_receiver",
    });
    Feedback_1.FeedbackModel.belongsTo(Transaction_1.TransactionModel, {
        foreignKey: "TransactionId",
        as: "transaction",
    });
    Follow_1.FollowModel.belongsTo(User_1.UserModel, {
        foreignKey: "FollowerId",
        as: "follower",
    });
    Follow_1.FollowModel.belongsTo(User_1.UserModel, {
        foreignKey: "FolloweeId",
        as: "followee",
    });
}
exports.setupAssociations = setupAssociations;
//# sourceMappingURL=associations.js.map