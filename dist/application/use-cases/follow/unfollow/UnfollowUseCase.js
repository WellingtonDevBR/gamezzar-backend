"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnfollowUseCase = void 0;
class UnfollowUseCase {
    constructor(followRepository, usersRepository) {
        this.followRepository = followRepository;
        this.usersRepository = usersRepository;
    }
    async execute(input) {
        const followee = await this.usersRepository.getByUserName(input.followeeUsername);
        await this.followRepository.unfollow(input.userId, followee.UserId);
        return {
            status: "success",
            message: "Successfully created",
        };
    }
}
exports.UnfollowUseCase = UnfollowUseCase;
//# sourceMappingURL=UnfollowUseCase.js.map