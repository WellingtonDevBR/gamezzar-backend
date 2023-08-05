import { Op, Sequelize } from "sequelize";
import { IUserGameRepository } from "../../../../../domain/repository/IUserGameRepository";
import { AddressModel } from "../../models/Address";
import { EditionModel } from "../../models/Edition";
import { GameModel } from "../../models/Game";
import { PlatformModel } from "../../models/Platform";
import { RegionModel } from "../../models/Region";
import { UserModel } from "../../models/User";
import { UserGameModel } from "../../models/UserGame";
import { WishlistModel } from "../../models/Wishlist";
import { FeedbackModel } from "../../models/Feedback";

export class SqlServerUserGameRepository implements IUserGameRepository {
  async createOrUpdate(userGame: any): Promise<any> {
    return await UserGameModel.findOne({
      where: { UserId: userGame.userId, GameId: userGame.gameId },
    }).then(async function (obj) {
      // update
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
      // insert
      return await UserGameModel.create({
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

  async getById(id: string): Promise<any> {
    const data = await GameModel.findOne({
      raw: true,
      nest: true,
      where: {
        GameId: id,
      },
      include: [
        {
          model: UserModel,
          as: "user",
          include: [
            {
              model: WishlistModel,
              as: "wishlist",
              include: [
                {
                  model: GameModel,
                  as: "details",
                },
              ],
            },
            {
              model: AddressModel,
              as: "address",
              required: false,
            },
          ],
        },
        {
          model: EditionModel,
          as: "edition",
        },
        {
          model: RegionModel,
          as: "region",
        },
      ],
    });
    return data;
  }

  async getAll(offset: number, userId?: string): Promise<any> {
    let whereCondition = {}; // Empty object to hold the where condition

    if (userId !== undefined && userId !== null) {
      // If userId is defined and not null, add the filter condition
      whereCondition = {
        [Op.not]: [
          {
            "$user.UserId$": userId,
          },
        ],
      };
    }

    const data = await UserGameModel.findAll({
      raw: true,
      nest: true,
      limit: 10, // number of records to fetch
      offset: offset, // start fetching records from this offset
      include: [
        {
          model: GameModel,
          as: "item",
          include: [
            {
              model: PlatformModel,
              as: "platform",
            },
            {
              model: RegionModel,
              as: "region",
            },
            {
              model: EditionModel,
              as: "edition",
            },
          ],
        },
        {
          model: UserModel,
          as: "user",
          include: [
            {
              model: AddressModel,
              as: "address",
            },
          ],
          where: whereCondition, // Pass the where condition to the query
          required: true,
        },
      ],
    });

    return data;
  }

  async getAllByUserId(userId: string): Promise<any> {
    const data = await UserGameModel.findAll({
      raw: true,
      nest: true,
      where: { UserId: userId },
      include: [
        {
          model: GameModel,
          as: "item",
          include: [
            {
              model: PlatformModel,
              as: "platform",
            },
            {
              model: RegionModel,
              as: "region",
            },
            {
              model: EditionModel,
              as: "edition",
            },
          ],
        },
      ],
    });
    return data;
  }

  async getByGameId(gameId: string): Promise<any> {
    const data = await UserGameModel.findAll({
      raw: true,
      nest: true,
      where: { GameId: gameId },
      include: [
        {
          model: UserModel,
          as: "user",
          include: [
            {
              model: AddressModel,
              as: "address",
            },
          ],
        },
      ],
    });
    return data;
  }

  async getByUserId(userId: string, gameId: string): Promise<any> {
    const data = await UserGameModel.findOne({
      raw: true,
      nest: true,
      where: { UserId: userId, GameId: gameId },
    });

    return data;
  }

  async getPopularCollectionByUserId(): Promise<any> {
    try {
      // Step 1: Find the userIds with at least 3 distinct games in their collection.
      const collectionResult = await UserGameModel.findAll({
        attributes: [
          "UserId",
          [
            Sequelize.fn(
              "COUNT",
              Sequelize.fn("DISTINCT", Sequelize.col("GameId"))
            ),
            "collectionCount",
          ],
        ],
        group: ["UserId"],
        raw: true,
      });

      // Sort users based on the number of distinct games in their collection in descending order.
      const sortedUsers = collectionResult.sort(
        (a: any, b: any) => b.collectionCount - a.collectionCount
      );

      // Take the top 2 users with the most games in their collection.
      const top2Users = sortedUsers.slice(0, 2);

      // Fetch the top 2 users along with their collections and user details
      const top2UsersWithCollections = await Promise.all(
        top2Users.map(async (user) => {
          const userGames: any = await UserGameModel.findAll({
            where: { UserId: user.UserId },
            attributes: ["UserId", "GameId"],
            include: [
              {
                model: GameModel,
                as: "item",
                attributes: ["GameId", "Image", "Title"],
              },
              {
                model: UserModel,
                as: "user",
                attributes: ["UserId", "UserName", "Avatar"],
              },
            ],
            limit: 4, // Limit the number of games shown to 4
            nest: true,
            raw: true,
          });

          return { userId: user.UserId, userGames };
        })
      );

      const resultArray = [];

      for (const userWithCollections of top2UsersWithCollections) {
        const { userId, userGames } = userWithCollections;
        const gamesForUserId = gatherGamesForUserId(
          userId,
          top2UsersWithCollections
        );
        const { UserName, Avatar } = userGames[0]?.user;

        resultArray.push({
          UserId: userId,
          games: gamesForUserId,
          UserName,
          Avatar,
        });
      }

      return resultArray;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

function gatherGamesForUserId(userId: string, data: any[]) {
  const userGames =
    data.find((entry: any) => entry.userId === userId)?.userGames || [];
  return userGames.map((game: any) => game.item);
}
