import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { FeedbackFactory } from "../../../../domain/factories/FeedbackFactory";
import { IFeedbackRepository } from "../../../../domain/repository/IFeedbackRepository";

interface Input {
  transactionId: string;
  rating: string;
  comment?: string;
  giverId: string;
  receiverId: string;
  status?: string;
}
interface Output {}

export class CreateFeedbackUseCase implements UseCase<Input, Output> {
  constructor(private feedbackRepository: IFeedbackRepository) {}
  async execute(input: Input): Promise<Output> {
    const feedbackFactory = FeedbackFactory.create(
      input.transactionId,
      input.rating,
      input.giverId,
      input.receiverId,
      input.comment
    );

    this.feedbackRepository.create(feedbackFactory);

    return {
      status: "success",
      message: "feedback given",
    };
  }
}
