"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindOneFollowerUseCase = void 0;
const objectConverter_1 = require("../../../../@seedowrk/helper/objectConverter");
class FindOneFollowerUseCase {
    constructor(followRepository, userRepository) {
        this.followRepository = followRepository;
        this.userRepository = userRepository;
    }
    async execute(input) {
        const user = await this.userRepository.getByUserName(input.username);
        const follower = await this.followRepository.findFollower(user.UserId);
        const formattedFollower = (0, objectConverter_1.convertObjectToSnakeCase)(follower);
        return formattedFollower;
    }
}
exports.FindOneFollowerUseCase = FindOneFollowerUseCase;
//# sourceMappingURL=findOneFollowerUseCase.js.map