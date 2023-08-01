import { Propose } from "../../../../../domain/entities/Propose";
import { IProposeRepository } from "../../../../../domain/repository/IProposeRepository";
import { ProposeModel } from "../../models/Propose";
import { Op } from "sequelize";
import { UserModel } from "../../models/User";
import { GameModel } from "../../models/Game";

export class SqlServerProposeRepository implements IProposeRepository {
  async deleteById(proposeId: string): Promise<any> {
    return await ProposeModel.destroy({
      where: {
        ProposeId: proposeId,
      },
    });
  }
  async create(data: Propose): Promise<any> {
    const propose = data.getAllProposeInformation();
    const createdPropose = await ProposeModel.create({
      id: data.getId(),
      InterestedUserId: propose.interestedUserId,
      OwnerUserId: propose.ownerUserId,
      InterestedGameId: propose.interestedGameId,
      OwnerGameId: propose.ownerGameId,
      Status: propose.status,
    });
    return createdPropose;
  }

  async getByUserId(userId: string): Promise<any> {
    try {
      const proposals = await ProposeModel.findAll({
        raw: true,
        nest: true,
        where: {
          [Op.or]: [{ InterestedUserId: userId }, { OwnerUserId: userId }],
        },
        include: [
          {
            model: UserModel,
            as: "sender",
            required: false,
          },
          {
            model: UserModel,
            as: "receiver",
            required: false,
          },
          {
            model: GameModel,
            as: "sender_game",
            required: false,
          },
          {
            model: GameModel,
            as: "receiver_game",
            required: false,
          },
        ],
      });

      return proposals;
    } catch (error) {
      console.log(error);
    }
  }
}
