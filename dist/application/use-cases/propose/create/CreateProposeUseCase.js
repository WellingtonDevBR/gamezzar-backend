"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProposeUseCase = void 0;
const aws_client_1 = require("../../../../@seedowrk/service/aws-client");
const ProposeFactory_1 = require("../../../../domain/factories/ProposeFactory");
class CreateProposeUseCase {
    constructor(proposeRepository, userRepository, gameRepository) {
        this.proposeRepository = proposeRepository;
        this.userRepository = userRepository;
        this.gameRepository = gameRepository;
    }
    async execute(input) {
        const proposeFactory = ProposeFactory_1.ProposeFactory.create(input.bidderId, input.receiverId, input.bidderGameId, input.receiverGameId, input.status);
        const proposeCreated = await this.proposeRepository.create(proposeFactory);
        if (!proposeCreated) {
            throw new Error("Propose not created");
        }
        const bidder = await this.userRepository.getById(input.bidderId);
        const receiver = await this.userRepository.getById(input.receiverId);
        const bidderGame = await this.gameRepository.getById(input.bidderGameId);
        const receiverGame = await this.gameRepository.getById(input.receiverGameId);
        await new aws_client_1.AwsClient(process.env.AWS_S3_ACCESS_KEY_ID, process.env.AWS_S3_SECRET_ACCESS_KEY).sendNewTradeEmail({
            proposalId: proposeFactory.getId(),
            bidderFirstName: bidder.FirstName,
            bidderGameName: bidderGame.Title,
            bidderGameImg: bidderGame.Image,
            receiverEmail: receiver.Email,
            receiverGameName: receiverGame.Title,
            receiverGameImg: receiverGame.Image,
            receiverFirstName: receiver.FirstName,
        });
        return {
            status: "success",
            message: "Propose created",
        };
    }
}
exports.CreateProposeUseCase = CreateProposeUseCase;
//# sourceMappingURL=CreateProposeUseCase.js.map