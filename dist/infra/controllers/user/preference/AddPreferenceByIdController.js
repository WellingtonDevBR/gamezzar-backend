"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPreferenceByIdController = void 0;
class AddPreferenceByIdController {
    constructor(addPreferenceByIdUseCase) {
        this.addPreferenceByIdUseCase = addPreferenceByIdUseCase;
    }
    async handle(request, response) {
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
exports.AddPreferenceByIdController = AddPreferenceByIdController;
//# sourceMappingURL=AddPreferenceByIdController.js.map