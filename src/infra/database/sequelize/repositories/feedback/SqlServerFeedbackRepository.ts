import { Feedback } from "../../../../../domain/entities/Feedback";
import { IFeedbackRepository } from "../../../../../domain/repository/IFeedbackRepository";
import { AddressModel } from "../../models/Address";
import { FeedbackModel } from "../../models/Feedback";
import { GameModel } from "../../models/Game";
import { TransactionModel } from "../../models/Transaction";
import { UserModel } from "../../models/User";

export class SqlServerFeedbackRepository implements IFeedbackRepository {
  async create(feedback: Feedback): Promise<any> {
    const feedbackInformation = feedback.getAllFeedbackInformation();
    return await FeedbackModel.create({
      FeedbackId: feedback.getId(),
      TransactionId: feedbackInformation.transactionId,
      Rating: feedbackInformation.rating,
      Comment: feedbackInformation.comment,
      GiverId: feedbackInformation.giverId,
      ReceiverId: feedbackInformation.receiverId,
      Status: "Completed",
    });
  }
  async findAllByUserName(userGame: string): Promise<any> {
    const feedbacksByUser = await UserModel.findAll({
      raw: true,
      nest: true,
      where: {
        UserName: userGame,
      },
      attributes: ["UserId", "UserName"],
      include: [
        {
          model: FeedbackModel,
          as: "feedback_receiver", // Include feedback where the UserModel is the receiver
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
              model: TransactionModel,
              as: "transaction",
              attributes: ["TransactionId"],
              include: [
                {
                  model: GameModel,
                  as: "receiver_game",
                  attributes: ["Title", "Image"],
                },
                {
                  model: GameModel,
                  as: "bidder_game",
                  attributes: ["Title", "Image"],
                },
                {
                  model: UserModel,
                  as: "receiver",
                  attributes: ["UserId", "FirstName", "LastName"],
                  include: [
                    {
                      model: AddressModel,
                      as: "address",
                    },
                  ],
                },
                {
                  model: UserModel,
                  as: "bidder",
                  attributes: ["UserId", "FirstName", "LastName"],
                  include: [
                    {
                      model: AddressModel,
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
