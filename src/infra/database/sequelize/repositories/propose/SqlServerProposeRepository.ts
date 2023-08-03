import { Propose } from "../../../../../domain/entities/Propose";
import { IProposeRepository } from "../../../../../domain/repository/IProposeRepository";
import { ProposeModel } from "../../models/Propose";
import { Op } from "sequelize";
import { UserModel } from "../../models/User";
import { GameModel } from "../../models/Game";

export class SqlServerProposeRepository implements IProposeRepository {
  async create(data: Propose): Promise<any> {
    const propose = data.getAllProposeInformation();
    return await ProposeModel.findOne({
      where: {
        BidderId: propose.bidderId,
        BidderGameId: propose.bidderGameId,
        ReceiverId: propose.receiverId,
        ReceiverGameId: propose.receiverGameId,
      },
    }).then(function (obj) {
      console.log(`TEST FOUND`, obj)
      if (obj)
        return obj.update({
          Status: propose.status,
        });
      // insert
      return ProposeModel.create({
        ProposeId: data.getId(),
        BidderId: propose.bidderId,
        BidderGameId: propose.bidderGameId,
        ReceiverId: propose.receiverId,
        ReceiverGameId: propose.receiverGameId,
        Status: propose.status,
      });
    });
  }

  async getByUserId(userId: string): Promise<any> {
    const proposals = await ProposeModel.findAll({
      raw: true,
      nest: true,
      where: {
        [Op.or]: [{ BidderId: userId }, { ReceiverId: userId }],
      },
      include: [
        {
          model: UserModel,
          as: "bidder",
          required: false,
        },
        {
          model: UserModel,
          as: "receiver",
          required: false,
        },
        {
          model: GameModel,
          as: "bidder_game",
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
  }

  async deleteById(proposeId: string): Promise<any> {
    return await ProposeModel.destroy({
      where: {
        ProposeId: proposeId,
      },
    });
  }
}
