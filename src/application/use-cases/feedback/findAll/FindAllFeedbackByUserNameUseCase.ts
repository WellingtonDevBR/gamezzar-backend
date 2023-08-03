import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { convertObjectToSnakeCase } from "../../../../@seedowrk/helper/objectConverter";
import { IFeedbackRepository } from "../../../../domain/repository/IFeedbackRepository";

interface Input {
  userName: string;
}
interface Output {}

export class FindAllFeedbackByUserNameUseCase implements UseCase<Input, Output> {
  constructor(private feedbackRepository: IFeedbackRepository) {}
  async execute(input: Input): Promise<Output> {
    const feedbacks = await this.feedbackRepository.findAllByUserName(input.userName);
    const feedbacksFormatted = convertObjectToSnakeCase(feedbacks);
    return feedbacksFormatted;
  }
}
