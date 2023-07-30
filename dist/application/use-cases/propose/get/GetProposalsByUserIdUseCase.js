"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProposalsByUserIdUseCase = void 0;
const objectConverter_1 = require("../../../../@seedowrk/helper/objectConverter");
class GetProposalsByUserIdUseCase {
    constructor(proposeRepository) {
        this.proposeRepository = proposeRepository;
    }
    async execute(input) {
        const propose = await this.proposeRepository.getByUserId(input.userId);
        const formattedPropose = (0, objectConverter_1.convertObjectToSnakeCase)(propose);
        return {
            proposals: formattedPropose,
            user_id: input.userId,
        };
    }
}
exports.GetProposalsByUserIdUseCase = GetProposalsByUserIdUseCase;
//# sourceMappingURL=GetProposalsByUserIdUseCase.js.map