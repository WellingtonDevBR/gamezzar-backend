import {
  ICreateUserDataOutput,
  IUserRepository,
} from "../../../../../domain/repository/IUserRepository";
import { User } from "../../../../../domain/entities/User";
import { UserModel } from "../../models/User";
import { AddressModel } from "../../models/Address";
import { PreferenceModel } from "../../models/Preference";
import { UserGameModel } from "../../models/UserGame";
import { GameModel } from "../../models/Game";
import { RegionModel } from "../../models/Region";
import { PlatformModel } from "../../models/Platform";
import { WishlistModel } from "../../models/Wishlist";

export class SqlServerUserRepository implements IUserRepository {
  async save(user: User): Promise<ICreateUserDataOutput> {
    const { id, firstName, lastName, username, avatar, email, password } =
      user.getAllUserInformation();
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
    const createdUser = await UserModel.create(userData);
    const outputData: ICreateUserDataOutput = {
      first_name: createdUser.FirstName,
      last_name: createdUser.LastName,
      user_name: createdUser.UserName,
      email: createdUser.Email,
    };
    return outputData;
  }

  async get(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }

  async getAll(): Promise<any> {
    const users = await UserModel.findAll({
      raw: true,
    });
    return users;
  }

  async getByEmail(email: string): Promise<any> {
    const user = await UserModel.findOne({
      raw: true,
      nest: true,
      where: {
        Email: email,
      },
      include: [
        {
          model: AddressModel,
          as: "address",
        },
      ],
    });
    return user;
  }

  async getById(id: string): Promise<any> {
    return await UserModel.findOne({
      raw: true,
      nest: true,
      where: {
        UserID: id,
      },
      include: [
        {
          model: AddressModel,
          as: "address",
        },
      ],
    });
  }

  async getByUserName(name: string): Promise<any> {
    const user = await UserModel.findOne({
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
          model: PreferenceModel,
          as: "preference",
          attributes: [
            "StatusMessage",
            "ShipmentInPerson",
            "ShipmentPostal",
            "ShipmentCourier",
          ],
        },
        {
          model: AddressModel,
          as: "address",
          attributes: ["Address"],
        },
        {
          model: UserGameModel,
          as: "collections",
          include: [
            {
              model: GameModel,
              as: "item",
            },
            {
              model: RegionModel,
              as: "hasregion",
            },
            {
              model: PlatformModel,
              as: "hasplatform",
            },
          ],
        },
      ],
    });
    return user;
  }

  async add(user: User): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async update(user: any): Promise<void> {
    UserModel.update(
      {
        Gender: user.gender,
        DOB: user.dob,
        MobileNumber: user.mobileNumber,
        Password: user.password ? user.password : user.Password,
        Email: user.email ? user.email : user.Email,
      },
      {
        where: {
          UserID: user.UserId,
        },
      }
    );
  }

  async updateAvatar(userId: string, avatarPath: string): Promise<any> {
    UserModel.update(
      {
        Avatar: avatarPath,
      },
      {
        where: {
          UserID: userId,
        },
      }
    );
  }

  async getOpportunities(userId: string): Promise<any> {
    const userWishlist = await WishlistModel.findAll({
      raw: true,
      nest: true,
      where: { UserId: userId },
    });
    const userGames = await UserGameModel.findAll({
      raw: true,
      nest: true,
      where: { UserId: userId },
    });

    const gameIdsInWishlist = userWishlist.map((w: any) => w.GameId);
    const gameIdsUserHas = userGames.map((g: any) => g.GameId);

    // Fetch current user's details
    const currentUserDetails = await UserModel.findOne({
      raw: true,
      where: { UserId: userId },
      attributes: ["UserId"],
    });

    const matchingTrades = [];
    const potentialMatches = await UserGameModel.findAll({
      raw: true,
      nest: true,
      where: { GameId: gameIdsInWishlist },
    });

    for (const match of potentialMatches) {
      // Fetch matching user's details
      const theirUserDetails = await UserModel.findOne({
        raw: true,
        where: { UserId: match.UserId },
        attributes: ["FirstName", "LastName", "Avatar"],
      });

      const theirWishlist = await WishlistModel.findAll({
        raw: true,
        nest: true,
        where: { UserId: match.UserId },
        include: [
          {
            model: GameModel,
            as: "details",
            attributes: ["GameId", "Title", "Image"],
          },
        ],
      });
      const theirWantedGames = theirWishlist.map((w: any) => w.details);

      const theirGames = await UserGameModel.findAll({
        raw: true,
        nest: true,
        where: { UserId: match.UserId },
        include: [
          {
            model: GameModel,
            as: "item",
            attributes: ["GameId", "Title", "Image"],
          },
        ],
      });
      const gamesTheyHave = theirGames.map((g: any) => g.item);

      // Find common wants and haves
      const youWantTheyHave = theirWantedGames.filter((game: any) =>
        gameIdsUserHas.includes(game.GameId)
      );
      const theyWantYouHave = gamesTheyHave.filter((game: any) =>
        gameIdsInWishlist.includes(game.GameId)
      );

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
