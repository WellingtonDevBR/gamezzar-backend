import { Feedback } from "../../../../../domain/entities/Feedback";
import { IFeedbackRepository } from "../../../../../domain/repository/IFeedbackRepository";
import { FeedbackModel } from "../../models/Feedback";

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
  async findAllByUserId(userId: string): Promise<any> {
    return await FeedbackModel.findAll({
        where: {
            ReceiverId: userId
        }
    });
  }
}
