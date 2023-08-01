import { UseCase } from "../../../../../@seedowrk/domain/usecase";
import { PreferenceFactory } from "../../../../../domain/factories/PreferenceFactory";
import { IPreferenceRepository } from "../../../../../domain/repository/IPreferenceRepository";

interface Input {
  userId: string;
  shipmentType: {
    person: boolean;
    postal: boolean;
    courier: boolean;
  };
  message: string;
  notificationType: {
    siteEmails: boolean;
    partnerEmails: boolean;
  };
  psnId: string;
  xboxId: string;
  ps5: number;
  ps4: number;
  ps3: number;
  xboxOne: number;
  xbox360: number;
  wiiU: number;
  wii: number;
  psVita: number;
  nitendo3DS: number;
}
interface Output {}
export class AddPreferenceByIdUseCase implements UseCase<Input, Output> {
  constructor(private preferenceRepository: IPreferenceRepository) {}
  async execute(input: Input): Promise<Output> {
    const preferenceFactory = PreferenceFactory.create({
      userId: input.userId,
      shipmentType: input.shipmentType,
      statusMessage: input.message,
      notificationType: input.notificationType,
      psnId: input.psnId,
      xboxId: input.xboxId,
      ps5: input.ps5,
      ps4: input.ps4,
      ps3: input.ps3,
      xboxOne: input.xboxOne,
      xbox360: input.xbox360,
      wiiU: input.wiiU,
      wii: input.wii,
      psVita: input.psVita,
      nitendo3DS: input.nitendo3DS,
    });
    await this.preferenceRepository.save(preferenceFactory);

    return {};
  }
}
