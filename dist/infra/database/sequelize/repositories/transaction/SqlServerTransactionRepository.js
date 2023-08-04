"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlServerTransactionRepository = void 0;
const sequelize_1 = require("sequelize");
const Transaction_1 = require("../../models/Transaction");
const User_1 = require("../../models/User");
const Game_1 = require("../../models/Game");
const Feedback_1 = require("../../models/Feedback");
class SqlServerTransactionRepository {
    async create(transaction) {
        const transactionFactory = transaction.getAllTransactionInformation();
        return Transaction_1.TransactionModel.findOne({
            where: {
                [sequelize_1.Op.or]: [
                    {
                        [sequelize_1.Op.and]: [
                            { BidderId: transactionFactory.bidderId },
                            { ReceiverId: transactionFactory.receiverId },
                            { BidderGameId: transactionFactory.bidderGameId },
                            { ReceiverGameId: transactionFactory.receiverGameId },
                        ],
                    },
                    {
                        [sequelize_1.Op.and]: [
                            { BidderId: transactionFactory.receiverId },
                            { ReceiverId: transactionFactory.bidderId },
                            { BidderGameId: transactionFactory.receiverGameId },
                            { ReceiverGameId: transactionFactory.bidderGameId },
                        ],
                    },
                ],
            },
        }).then(function (obj) {
            if (obj)
                return obj.update({
                    Status: transactionFactory.status,
                });
            return Transaction_1.TransactionModel.create({
                TransactionId: transaction.getId(),
                BidderId: transactionFactory.bidderId,
                ReceiverId: transactionFactory.receiverId,
                BidderGameId: transactionFactory.bidderGameId,
                ReceiverGameId: transactionFactory.receiverGameId,
                Status: transactionFactory.status,
            });
        });
    }
    async findAllByUserId(userId) {
        return await Transaction_1.TransactionModel.findAll({
            raw: true,
            nest: true,
            where: {
                [sequelize_1.Op.or]: [{ BidderId: userId }, { ReceiverId: userId }],
            },
            include: [
                {
                    model: User_1.UserModel,
                    as: "bidder",
                    attributes: ["UserId"],
                },
                {
                    model: User_1.UserModel,
                    as: "receiver",
                    attributes: ["UserId"],
                },
                {
                    model: Game_1.GameModel,
                    as: "bidder_game",
                    attributes: ["GameId", "Image", "Title"],
                },
                {
                    model: Game_1.GameModel,
                    as: "receiver_game",
                    attributes: ["GameId", "Image", "Title"],
                },
                {
                    model: Feedback_1.FeedbackModel,
                    as: "feedback",
                    include: [
                        {
                            model: User_1.UserModel,
                            as: "feedback_giver",
                        },
                        {
                            model: User_1.UserModel,
                            as: "feedback_receiver",
                        },
                    ],
                },
            ],
        });
    }
}
exports.SqlServerTransactionRepository = SqlServerTransactionRepository;
//# sourceMappingURL=SqlServerTransactionRepository.js.map