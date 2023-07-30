"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByUserNameUseCase = void 0;
class GetUserByUserNameUseCase {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async execute(request) {
        const user = await this.usersRepository.getByUserName(request.userName);
        if (!user)
            throw new Error("User not found");
        return {
            id: user.UserID,
            first_name: user.FirstName,
            last_name: user.LastName,
            user_name: user.UserName,
            avatar: user.Avatar,
            email: user.Email,
            password: user.Password,
            updated_at: user.updatedAt,
            created_at: user.createdAt,
        };
    }
}
exports.GetUserByUserNameUseCase = GetUserByUserNameUseCase;
//# sourceMappingURL=GetUserByUserNameUseCase.js.map