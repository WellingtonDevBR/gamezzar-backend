"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProposeUseCase = void 0;
const ProposeFactory_1 = require("../../../../domain/factories/ProposeFactory");
class CreateProposeUseCase {
    constructor(proposeRepository) {
        this.proposeRepository = proposeRepository;
    }
    async execute(input) {
        const proposeFactory = ProposeFactory_1.ProposeFactory.create(input.bidderId, input.receiverId, input.bidderGameId, input.receiverGameId, input.status);
        const proposeCreated = await this.proposeRepository.create(proposeFactory);
        if (!proposeCreated) {
            throw new Error("Propose not created");
        }
        return {
            status: "success",
            message: "Propose created",
        };
    }
}
exports.CreateProposeUseCase = CreateProposeUseCase;
//# sourceMappingURL=CreateProposeUseCase.js.map