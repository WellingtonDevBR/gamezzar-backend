"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserGameByUserIdUseCase = void 0;
class GetUserGameByUserIdUseCase {
    constructor(userGameRepository, usersRepository) {
        this.userGameRepository = userGameRepository;
        this.usersRepository = usersRepository;
    }
    async execute(request) {
        const user = await this.usersRepository.getByEmail(request.email);
        const userGame = await this.userGameRepository.getByUserId(user.UserId, request.gameId);
        if (!userGame) {
            throw new Error("User game not found");
        }
        return {
            status: 'success',
            found: true,
        };
    }
}
exports.GetUserGameByUserIdUseCase = GetUserGameByUserIdUseCase;
//# sourceMappingURL=GetUserGameByUserIdUseCase.js.map