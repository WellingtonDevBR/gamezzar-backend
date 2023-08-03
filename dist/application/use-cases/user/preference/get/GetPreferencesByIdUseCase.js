"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPreferencesByIdUseCase = void 0;
const objectConverter_1 = require("../../../../../@seedowrk/helper/objectConverter");
class GetPreferencesByIdUseCase {
    constructor(preferencesRepository) {
        this.preferencesRepository = preferencesRepository;
    }
    async execute(input) {
        const preferences = await this.preferencesRepository.getByUserId(input.userId);
        const formattedPreferences = (0, objectConverter_1.convertObjectToSnakeCase)(preferences);
        return formattedPreferences;
    }
}
exports.GetPreferencesByIdUseCase = GetPreferencesByIdUseCase;
//# sourceMappingURL=GetPreferencesByIdUseCase.js.map