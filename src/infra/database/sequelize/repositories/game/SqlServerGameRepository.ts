import { Op, literal } from "sequelize";
import { Game } from "../../../../../domain/entities/Game";
import { IGameRepository } from "../../../../../domain/repository/IGameRepository";
import { GameModel } from "../../models/Game";
import { UserGameModel } from "../../models/UserGame";
import { UserModel } from "../../models/User";
import { PlatformModel } from "../../models/Platform";
import { RegionModel } from "../../models/Region";
import { EditionModel } from "../../models/Edition";

export class SqlServerGameRepository implements IGameRepository {
  async create(game: Game): Promise<any> {
    const data = game.getAllUserInformation();

    return await GameModel.create({
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

  async getAll(offset: number): Promise<any> {
    return await GameModel.findAll({
      raw: true,
      nest: true,
      offset: offset,
      limit: 10,
      include: [
        {
          model: EditionModel,
          as: "edition",
        },
      ],
    });
  }

  async getById(gameId: string): Promise<any> {
    const data = await GameModel.findOne({
      raw: true,
      nest: true,
      where: { GameId: gameId },
      include: [
        {
          model: UserModel,
          as: "user",
        },
        {
          model: UserGameModel,
          as: "inventory",
        },
        {
          model: PlatformModel,
          as: "platform",
        },
        {
          model: RegionModel,
          as: "region",
        },
      ],
    });
    return data;
  }

  async searchByName(name: string): Promise<any> {
    return await GameModel.findAll({
      raw: true,
      nest: true,
      where: {
        Title: {
          [Op.like]: `%${name}%`,
        },
      },
      limit: 5,
    });
  }
}
