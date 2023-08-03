"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPreferenceByIdUseCase = void 0;
const PreferenceFactory_1 = require("../../../../../domain/factories/PreferenceFactory");
class AddPreferenceByIdUseCase {
    constructor(preferenceRepository) {
        this.preferenceRepository = preferenceRepository;
    }
    async execute(input) {
        const preferenceFactory = PreferenceFactory_1.PreferenceFactory.create({
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
exports.AddPreferenceByIdUseCase = AddPreferenceByIdUseCase;
//# sourceMappingURL=AddPreferencesByIdUseCase.js.map