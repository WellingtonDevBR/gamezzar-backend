"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAllFollowersUseCase = void 0;
const objectConverter_1 = require("../../../../@seedowrk/helper/objectConverter");
class FindAllFollowersUseCase {
    constructor(followRepository) {
        this.followRepository = followRepository;
    }
    async execute(input) {
        const followers = await this.followRepository.findFollowers(input.userId);
        const formattedFollowers = (0, objectConverter_1.convertObjectToSnakeCase)(followers);
        return formattedFollowers;
    }
}
exports.FindAllFollowersUseCase = FindAllFollowersUseCase;
//# sourceMappingURL=findAllFollowersUseCase.js.map