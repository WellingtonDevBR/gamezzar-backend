"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlServerUserRepository = void 0;
const User_1 = require("../../models/User");
const Address_1 = require("../../models/Address");
const Preference_1 = require("../../models/Preference");
const UserGame_1 = require("../../models/UserGame");
const Game_1 = require("../../models/Game");
const Region_1 = require("../../models/Region");
const Platform_1 = require("../../models/Platform");
const Wishlist_1 = require("../../models/Wishlist");
class SqlServerUserRepository {
    async save(user) {
        const { id, firstName, lastName, username, avatar, email, password } = user.getAllUserInformation();
        const userData = {
            UserID: id,
            FirstName: firstName.value,
            LastName: lastName.value,
            UserName: username.value,
            Avatar: avatar,
            Email: email.value,
            Password: password.value,
            RegistrationDate: new Date(),
        };
        const createdUser = await User_1.UserModel.create(userData);
        const outputData = {
            first_name: createdUser.FirstName,
            last_name: createdUser.LastName,
            user_name: createdUser.UserName,
            email: createdUser.Email,
        };
        return outputData;
    }
    async get(id) {
        throw new Error("Method not implemented.");
    }
    async getAll() {
        const users = await User_1.UserModel.findAll({
            raw: true,
        });
        return users;
    }
    async getByEmail(email) {
        const user = await User_1.UserModel.findOne({
            raw: true,
            nest: true,
            where: {
                Email: email,
            },
            include: [
                {
                    model: Address_1.AddressModel,
                    as: "address",
                },
            ],
        });
        return user;
    }
    async getById(id) {
        return await User_1.UserModel.findOne({
            raw: true,
            nest: true,
            where: {
                UserID: id,
            },
            include: [
                {
                    model: Address_1.AddressModel,
                    as: "address",
                },
            ],
        });
    }
    async getByUserName(name) {
        try {
            const user = await User_1.UserModel.findOne({
                where: {
                    UserName: name,
                },
                attributes: [
                    "UserId",
                    "FirstName",
                    "LastName",
                    "UserName",
                    "Avatar",
                    "CreatedAt",
                ],
                include: [
                    {
                        model: Preference_1.PreferenceModel,
                        as: "preference",
                        attributes: [
                            "StatusMessage",
                            "ShipmentInPerson",
                            "ShipmentPostal",
                            "ShipmentCourier",
                        ],
                    },
                    {
                        model: Address_1.AddressModel,
                        as: "address",
                        attributes: ["Address"],
                    },
                    {
                        model: UserGame_1.UserGameModel,
                        as: "collections",
                        include: [
                            {
                                model: Game_1.GameModel,
                                as: "item",
                            },
                            {
                                model: Region_1.RegionModel,
                                as: "hasregion",
                            },
                            {
                                model: Platform_1.PlatformModel,
                                as: "hasplatform",
                            },
                        ],
                    },
                ],
            });
            return user;
        }
        catch (error) {
            console.log(error);
        }
    }
    async add(user) {
        throw new Error("Method not implemented.");
    }
    async update(user) {
        User_1.UserModel.update({
            Gender: user.gender,
            DOB: user.dob,
            MobileNumber: user.mobileNumber,
            Password: user.password ? user.password : user.Password,
            Email: user.email ? user.email : user.Email,
        }, {
            where: {
                UserID: user.UserId,
            },
        });
    }
    async updateAvatar(userId, avatarPath) {
        User_1.UserModel.update({
            Avatar: avatarPath,
        }, {
            where: {
                UserID: userId,
            },
        });
    }
    async getOpportunities(userId) {
        const userWishlist = await Wishlist_1.WishlistModel.findAll({
            raw: true,
            nest: true,
            where: { UserId: userId },
        });
        const userGames = await UserGame_1.UserGameModel.findAll({
            raw: true,
            nest: true,
            where: { UserId: userId },
        });
        const gameIdsInWishlist = userWishlist.map((w) => w.GameId);
        const gameIdsUserHas = userGames.map((g) => g.GameId);
        const currentUserDetails = await User_1.UserModel.findOne({
            raw: true,
            where: { UserId: userId },
            attributes: ["UserId"],
        });
        const matchingTrades = [];
        const potentialMatches = await UserGame_1.UserGameModel.findAll({
            raw: true,
            nest: true,
            where: { GameId: gameIdsInWishlist },
        });
        for (const match of potentialMatches) {
            const theirUserDetails = await User_1.UserModel.findOne({
                raw: true,
                where: { UserId: match.UserId },
                attributes: ["FirstName", "LastName", "Avatar"],
            });
            const theirWishlist = await Wishlist_1.WishlistModel.findAll({
                raw: true,
                nest: true,
                where: { UserId: match.UserId },
                include: [
                    {
                        model: Game_1.GameModel,
                        as: "details",
                        attributes: ["GameId", "Title", "Image"],
                    },
                ],
            });
            const theirWantedGames = theirWishlist.map((w) => w.details);
            const theirGames = await UserGame_1.UserGameModel.findAll({
                raw: true,
                nest: true,
                where: { UserId: match.UserId },
                include: [
                    {
                        model: Game_1.GameModel,
                        as: "item",
                        attributes: ["GameId", "Title", "Image"],
                    },
                ],
            });
            const gamesTheyHave = theirGames.map((g) => g.item);
            const youWantTheyHave = theirWantedGames.filter((game) => gameIdsUserHas.includes(game.GameId));
            const theyWantYouHave = gamesTheyHave.filter((game) => gameIdsInWishlist.includes(game.GameId));
            if (youWantTheyHave.length > 0 && theyWantYouHave.length > 0) {
                matchingTrades.push({
                    yourDetails: currentUserDetails,
                    matchUserId: match.UserId,
                    theirDetails: theirUserDetails,
                    gamesTheyWant: theyWantYouHave,
                    gamesYouWant: youWantTheyHave,
                });
            }
        }
        return matchingTrades;
    }
}
exports.SqlServerUserRepository = SqlServerUserRepository;
//# sourceMappingURL=SqlServerUserRepository.js.map