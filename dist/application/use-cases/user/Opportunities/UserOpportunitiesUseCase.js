"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOpportunitiesUseCase = void 0;
const objectConverter_1 = require("../../../../@seedowrk/helper/objectConverter");
class UserOpportunitiesUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute({ userId }) {
        const opportunities = await this.userRepository.getOpportunities(userId);
        const formattedOpportunities = (0, objectConverter_1.convertObjectToSnakeCase)(opportunities);
        return formattedOpportunities;
    }
}
exports.UserOpportunitiesUseCase = UserOpportunitiesUseCase;
//# sourceMappingURL=UserOpportunitiesUseCase.js.map