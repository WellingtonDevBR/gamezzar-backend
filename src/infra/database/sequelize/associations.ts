import { AddressModel } from "./models/Address";
import { EditionModel } from "./models/Edition";
import { FeedbackModel } from "./models/Feedback";
import { FollowModel } from "./models/Follow";
import { GameModel } from "./models/Game";
import { PlatformModel } from "./models/Platform";
import { PreferenceModel } from "./models/Preference";
import { ProposeModel } from "./models/Propose";
import { RegionModel } from "./models/Region";
import { TransactionModel } from "./models/Transaction";
import { UserModel } from "./models/User";
import { UserGameModel } from "./models/UserGame";
import { WishlistModel } from "./models/Wishlist";

export function setupAssociations() {
  // UserModel
  UserModel.belongsToMany(GameModel, {
    through: "Inventory",
    foreignKey: "UserId",
    as: "game",
  });

  UserModel.hasMany(UserGameModel, {
    foreignKey: "UserId",
    as: "collections",
  });

  UserModel.hasOne(AddressModel, {
    foreignKey: "UserId",
    as: "address",
  });

  UserModel.hasOne(PreferenceModel, {
    foreignKey: "UserId",
    as: "preference",
  });

  UserModel.hasMany(UserGameModel, {
    foreignKey: "UserId",
    as: "inventory",
  });

  UserModel.hasMany(WishlistModel, {
    foreignKey: "UserId",
    as: "wishlist",
  });

  UserModel.hasMany(FeedbackModel, {
    foreignKey: "GiverId",
    as: "feedback_giver",
  });

  UserModel.hasMany(FeedbackModel, {
    foreignKey: "ReceiverId",
    as: "feedback_receiver",
  });

  UserModel.hasMany(FollowModel, {
    foreignKey: "FollowerId",
    as: "userFollowers",
  });

  // ProposeModel
  ProposeModel.belongsTo(UserModel, {
    foreignKey: "BidderId",
    as: "bidder",
  });

  ProposeModel.belongsTo(UserModel, {
    foreignKey: "ReceiverId",
    as: "receiver",
  });

  ProposeModel.belongsTo(GameModel, {
    foreignKey: "BidderGameId",
    as: "bidder_game",
  });

  ProposeModel.belongsTo(GameModel, {
    foreignKey: "ReceiverGameId",
    as: "receiver_game",
  });

  // GameModel
  GameModel.belongsToMany(UserModel, {
    through: "Inventory",
    foreignKey: "GameId",
    as: "user",
  });

  GameModel.belongsToMany(PlatformModel, {
    through: "Games_Platform",
    foreignKey: "GameId",
    as: "platform",
  });

  GameModel.belongsToMany(RegionModel, {
    through: "Games_Region",
    foreignKey: "GameId",
    as: "region",
  });

  GameModel.hasMany(UserGameModel, {
    foreignKey: "GameId",
    as: "inventory",
  });

  GameModel.belongsToMany(EditionModel, {
    through: "Games_Edition",
    foreignKey: "GameId",
    as: "edition",
  });

  // UserGameModel
  UserGameModel.hasMany(UserModel, {
    foreignKey: "UserId",
    as: "user",
  });

  UserGameModel.belongsTo(GameModel, {
    foreignKey: "GameId",
    as: "item", // This represents one Game instance related to the Inventory
  });

  UserGameModel.belongsTo(RegionModel, {
    foreignKey: "RegionId",
    as: "hasregion",
  });

  UserGameModel.belongsTo(PlatformModel, {
    foreignKey: "PlatformId",
    as: "hasplatform",
  });

  // AddressModel
  AddressModel.belongsTo(UserModel, {
    foreignKey: "UserId",
    as: "user",
  });

  // WishlistModel
  WishlistModel.belongsTo(GameModel, {
    foreignKey: "GameId", // Use the correct foreign key that relates WishlistModel to GameModel
    as: "details", // This alias should match the alias used in the include query
  });

  WishlistModel.belongsTo(UserModel, {
    foreignKey: "UserId",
    as: "user",
  });

  // PlatformModel
  PlatformModel.belongsToMany(GameModel, {
    through: "Games_Platform",
    foreignKey: "PlatformId",
    as: "platform",
  });

  // RegionModel
  RegionModel.belongsToMany(GameModel, {
    through: "Games_Region",
    foreignKey: "RegionId",
    as: "games",
  });

  EditionModel.belongsToMany(GameModel, {
    through: "Games_Edition",
    foreignKey: "EditionId",
    as: "edition",
  });

  // PreferenceModel
  PreferenceModel.belongsTo(UserModel, {
    foreignKey: "UserId",
    as: "user",
  });

  // TransactionModel
  TransactionModel.belongsTo(UserModel, {
    foreignKey: "BidderId",
    as: "bidder",
  });

  TransactionModel.belongsTo(UserModel, {
    foreignKey: "ReceiverId",
    as: "receiver",
  });

  TransactionModel.belongsTo(GameModel, {
    foreignKey: "BidderGameId",
    as: "bidder_game",
  });

  TransactionModel.belongsTo(GameModel, {
    foreignKey: "ReceiverGameId",
    as: "receiver_game",
  });

  TransactionModel.hasOne(FeedbackModel, {
    foreignKey: "TransactionId",
    as: "feedback",
  });

  // FeedbackModel
  FeedbackModel.belongsTo(UserModel, {
    foreignKey: "GiverId",
    as: "feedback_giver",
  });

  FeedbackModel.belongsTo(UserModel, {
    foreignKey: "ReceiverId",
    as: "feedback_receiver",
  });

  FeedbackModel.belongsTo(TransactionModel, {
    foreignKey: "TransactionId",
    as: "transaction",
  });

  // Define associations
  FollowModel.belongsTo(UserModel, {
    foreignKey: "FollowerId",
    as: "follower",
  });

  FollowModel.belongsTo(UserModel, {
    foreignKey: "FolloweeId",
    as: "followee",
  });
}
