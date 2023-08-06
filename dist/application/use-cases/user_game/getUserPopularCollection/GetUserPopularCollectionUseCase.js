"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserPopularCollectionUseCase = void 0;
class GetUserPopularCollectionUseCase {
    constructor(userGameRepository) {
        this.userGameRepository = userGameRepository;
    }
    async execute(input) {
        return await this.userGameRepository.getPopularCollectionByUserId();
    }
}
exports.GetUserPopularCollectionUseCase = GetUserPopularCollectionUseCase;
//# sourceMappingURL=GetUserPopularCollectionUseCase.js.map