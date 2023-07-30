import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { convertObjectToSnakeCase } from "../../../../@seedowrk/helper/objectConverter";
import { IUserGameRepository } from "../../../../domain/repository/IUserGameRepository";

interface Input {
  userId: string;
}
interface Output {}
export class GetAllUserGameByUserIdUseCase implements UseCase<Input, Output> {
  constructor(private userGameRepository: IUserGameRepository) {}
  async execute(request: Input): Promise<Output> {
    const collection = await this.userGameRepository.getAllByUserId(
      request.userId
    );

    const formattedCollection = convertObjectToSnakeCase(collection);
    return formattedCollection;
  }
}
