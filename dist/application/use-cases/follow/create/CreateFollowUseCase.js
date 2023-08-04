"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFollowUseCase = void 0;
const FollowFactory_1 = require("../../../../domain/factories/FollowFactory");
class CreateFollowUseCase {
    constructor(followRepository, usersRepository) {
        this.followRepository = followRepository;
        this.usersRepository = usersRepository;
    }
    async execute(input) {
        const followee = await this.usersRepository.getByUserName(input.followeeUsername);
        const followFactory = FollowFactory_1.FollowFactory.create(input.userId, followee.UserId);
        const follow = await this.followRepository.create(followFactory);
        return {
            status: "success",
            message: "Successfully created",
        };
    }
}
exports.CreateFollowUseCase = CreateFollowUseCase;
//# sourceMappingURL=CreateFollowUseCase.js.map