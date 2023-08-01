import { Op } from "sequelize";
import { Transaction } from "../../../../../domain/entities/TransactionId";
import { ITransactionRepository } from "../../../../../domain/repository/ITransactionRepository";
import { TransactionModel } from "../../models/Transaction";
import { UserModel } from "../../models/User";
import { GameModel } from "../../models/Game";

export class SqlServerTransactionRepository implements ITransactionRepository {
  async create(transaction: Transaction): Promise<any> {
    const transactionFactory = transaction.getAllTransactionInformation();
    return await TransactionModel.create({
      TransactionId: transaction.getId(),
      SenderId: transactionFactory.senderId,
      ReceiverId: transactionFactory.receiverId,
      SenderGameId: transactionFactory.senderGameId,
      ReceiverGameId: transactionFactory.receiverGameId,
      Status: transactionFactory.status,
    });
  }

  async findAllByUserId(userId: string): Promise<any> {
    return await TransactionModel.findAll({
      raw: true,
      nest: true,
      where: {
        [Op.or]: [{ SenderId: userId }, { ReceiverId: userId }],
      },
      include: [
        {
          model: UserModel,
          as: "sender",
        },
        {
          model: UserModel,
          as: "receiver",
        },
        {
          model: GameModel,
          as: "sender_game",
        },
        {
          model: GameModel,
          as: "receiver_game",
        },
      ],
    });
  }
}
