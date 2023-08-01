import { Request, Response } from "express";
import { AddPreferenceByIdUseCase } from "../../../../application/use-cases/user/preference/create/AddPreferencesByIdUseCase";

export class AddPreferenceByIdController {
  constructor(private addPreferenceByIdUseCase: AddPreferenceByIdUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const body = request.body;
    const preference = await this.addPreferenceByIdUseCase.execute({
      userId: body.userId,
      shipmentType: body.shipment_type,
      message: body.status,
      notificationType: body.notification_type,
      psnId: body.psn_id,
      xboxId: body.xbox_id,
      ps5: body.playstation5,
      ps4: body.playstation4,
      ps3: body.playstation3,
      xboxOne: body.xboxone,
      xbox360: body.xbox360,
      wiiU: body.wiiu,
      wii: body.wii,
      psVita: body.psvita,
      nitendo3DS: body.nitendo3ds,
    });
    return response.status(201).json(preference);
  }
}
