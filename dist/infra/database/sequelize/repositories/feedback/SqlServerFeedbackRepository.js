"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlServerFeedbackRepository = void 0;
const Address_1 = require("../../models/Address");
const Feedback_1 = require("../../models/Feedback");
const Game_1 = require("../../models/Game");
const Transaction_1 = require("../../models/Transaction");
const User_1 = require("../../models/User");
class SqlServerFeedbackRepository {
    async create(feedback) {
        const feedbackInformation = feedback.getAllFeedbackInformation();
        return await Feedback_1.FeedbackModel.create({
            FeedbackId: feedback.getId(),
            TransactionId: feedbackInformation.transactionId,
            Rating: feedbackInformation.rating,
            Comment: feedbackInformation.comment,
            GiverId: feedbackInformation.giverId,
            ReceiverId: feedbackInformation.receiverId,
            Status: "Completed",
        });
    }
    async findAllByUserName(userGame) {
        const feedbacksByUser = await User_1.UserModel.findAll({
            raw: true,
            nest: true,
            where: {
                UserName: userGame,
            },
            attributes: ["UserId", "UserName"],
            include: [
                {
                    model: Feedback_1.FeedbackModel,
                    as: "feedback_receiver",
                    attributes: [
                        "FeedbackId",
                        "Rating",
                        "Comment",
                        "Status",
                        "CreatedAt",
                    ],
                    required: true,
                    include: [
                        {
                            model: Transaction_1.TransactionModel,
                            as: "transaction",
                            attributes: ["TransactionId"],
                            include: [
                                {
                                    model: Game_1.GameModel,
                                    as: "receiver_game",
                                    attributes: ["Title", "Image"],
                                },
                                {
                                    model: Game_1.GameModel,
                                    as: "bidder_game",
                                    attributes: ["Title", "Image"],
                                },
                                {
                                    model: User_1.UserModel,
                                    as: "receiver",
                                    attributes: ["UserId", "FirstName", "LastName"],
                                    include: [
                                        {
                                            model: Address_1.AddressModel,
                                            as: "address",
                                        },
                                    ],
                                },
                                {
                                    model: User_1.UserModel,
                                    as: "bidder",
                                    attributes: ["UserId", "FirstName", "LastName"],
                                    include: [
                                        {
                                            model: Address_1.AddressModel,
                                            as: "address",
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        });
        return feedbacksByUser;
    }
}
exports.SqlServerFeedbackRepository = SqlServerFeedbackRepository;
//# sourceMappingURL=SqlServerFeedbackRepository.js.map