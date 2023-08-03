"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlServerTransactionRepository = void 0;
const sequelize_1 = require("sequelize");
const Transaction_1 = require("../../models/Transaction");
const User_1 = require("../../models/User");
const Game_1 = require("../../models/Game");
class SqlServerTransactionRepository {
    async create(transaction) {
        const transactionFactory = transaction.getAllTransactionInformation();
        return await Transaction_1.TransactionModel.create({
            TransactionId: transaction.getId(),
            SenderId: transactionFactory.senderId,
            ReceiverId: transactionFactory.receiverId,
            SenderGameId: transactionFactory.senderGameId,
            ReceiverGameId: transactionFactory.receiverGameId,
            Status: transactionFactory.status,
        });
    }
    async findAllByUserId(userId) {
        return await Transaction_1.TransactionModel.findAll({
            raw: true,
            nest: true,
            where: {
                [sequelize_1.Op.or]: [{ SenderId: userId }, { ReceiverId: userId }],
            },
            include: [
                {
                    model: User_1.UserModel,
                    as: "sender",
                },
                {
                    model: User_1.UserModel,
                    as: "receiver",
                },
                {
                    model: Game_1.GameModel,
                    as: "sender_game",
                },
                {
                    model: Game_1.GameModel,
                    as: "receiver_game",
                },
            ],
        });
    }
}
exports.SqlServerTransactionRepository = SqlServerTransactionRepository;
//# sourceMappingURL=SqlServerTransactionRepository.js.map