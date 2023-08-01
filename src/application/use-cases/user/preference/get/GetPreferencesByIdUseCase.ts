import { UseCase } from "../../../../../@seedowrk/domain/usecase";
import { convertObjectToSnakeCase } from "../../../../../@seedowrk/helper/objectConverter";
import { IPreferenceRepository } from "../../../../../domain/repository/IPreferenceRepository";

interface Input {
  userId: string;
}
interface Output {}

export class GetPreferencesByIdUseCase implements UseCase<Input, Output> {
  constructor(private preferencesRepository: IPreferenceRepository) {}
  async execute(input: Input): Promise<Output> {
    const preferences = await this.preferencesRepository.getByUserId(
      input.userId
    );

    const formattedPreferences = convertObjectToSnakeCase(preferences);
    return formattedPreferences;
  }
}
