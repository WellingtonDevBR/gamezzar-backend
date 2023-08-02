import { Feedback } from "../entities/Feedback";

export class FeedbackFactory {
  static create(
    transactionId: string,
    rating: string,
    giverId: string,
    receiverId: string,
    comment?: string
  ): Feedback {
    return Feedback.createFeedback({
      transactionId,
      rating,
      comment,
      giverId,
      receiverId,
    });
  }
}
