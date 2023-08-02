import { IFeedbackRepository } from "../../../../../domain/repository/IFeedbackRepository";

export class SqlServerFeedbackRepository implements IFeedbackRepository {
  create(): Promise<any> {
    throw new Error("Method not implemented.");
  }
  findAllByUserId(): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
