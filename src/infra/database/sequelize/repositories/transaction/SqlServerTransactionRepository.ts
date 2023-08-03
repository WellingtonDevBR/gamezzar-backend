import { Op } from "sequelize";
import { Transaction } from "../../../../../domain/entities/TransactionId";
import { ITransactionRepository } from "../../../../../domain/repository/ITransactionRepository";
import { TransactionModel } from "../../models/Transaction";
import { UserModel } from "../../models/User";
import { GameModel } from "../../models/Game";
import { FeedbackModel } from "../../models/Feedback";

export class SqlServerTransactionRepository implements ITransactionRepository {
  async create(transaction: Transaction): Promise<any> {
    const transactionFactory = transaction.getAllTransactionInformation();
    return TransactionModel.findOne({
      where: {
        [Op.or]: [
          {
            [Op.and]: [
              { BidderId: transactionFactory.bidderId },
              { ReceiverId: transactionFactory.receiverId },
              { BidderGameId: transactionFactory.bidderGameId },
              { ReceiverGameId: transactionFactory.receiverGameId },
            ],
          },
          {
            [Op.and]: [
              { BidderId: transactionFactory.receiverId },
              { ReceiverId: transactionFactory.bidderId },
              { BidderGameId: transactionFactory.receiverGameId },
              { ReceiverGameId: transactionFactory.bidderGameId },
            ],
          },
        ],
      },
    }).then(function (obj) {
      // update
      if (obj)
        return obj.update({
          Status: transactionFactory.status,
        });
      // insert
      return TransactionModel.create({
        TransactionId: transaction.getId(),
        BidderId: transactionFactory.bidderId,
        ReceiverId: transactionFactory.receiverId,
        BidderGameId: transactionFactory.bidderGameId,
        ReceiverGameId: transactionFactory.receiverGameId,
        Status: transactionFactory.status,
      });
    });
  }

  async findAllByUserId(userId: string): Promise<any> {
    return await TransactionModel.findAll({
      raw: true,
      nest: true,
      where: {
        [Op.or]: [{ BidderId: userId }, { ReceiverId: userId }],
      },
      include: [
        {
          model: UserModel,
          as: "bidder",
          attributes: ["UserId"],
        },
        {
          model: UserModel,
          as: "receiver",
          attributes: ["UserId"],
        },
        {
          model: GameModel,
          as: "bidder_game",
          attributes: ["GameId", "Image", "Title"],
        },
        {
          model: GameModel,
          as: "receiver_game",
          attributes: ["GameId", "Image", "Title"],
        },
        {
          model: FeedbackModel,
          as: "feedback",
          include: [
            {
              model: UserModel,
              as: "feedback_giver",
            },
            {
              model: UserModel,
              as: "feedback_receiver",
            },
          ],
          // required: true,
        },
      ],
    });
  }
}
