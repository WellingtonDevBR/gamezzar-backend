import { IUserGameRepository } from "../../../../../domain/repository/IUserGameRepository";
import { EditionModel } from "../../models/Edition";
import { GameModel } from "../../models/Game";
import { PlatformModel } from "../../models/Platform";
import { RegionModel } from "../../models/Region";
import { UserModel } from "../../models/User";
import { UserGameModel } from "../../models/UserGame";

export class SqlServerUserGameRepository implements IUserGameRepository {
  async createOrUpdate(userGame: any): Promise<any> {
    console.log(userGame);
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

  async getAll(): Promise<any> {
    const data = await GameModel.findAll({
      raw: true,
      nest: true,
      include: [
        {
          model: UserModel,
          as: "user",
        },
        {
          model: EditionModel,
          as: "edition",
        },
        {
          model: RegionModel,
          as: "region",
        }
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
          as: "details",
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
}
