"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserController = void 0;
class GetUserController {
    constructor(getUserUseCase) {
        this.getUserUseCase = getUserUseCase;
    }
    async handle(request, response) {
        try {
            const { email } = request.body;
            const user = await this.getUserUseCase.execute({ email });
            return response.status(200).json(user);
        }
        catch (error) {
            return response.status(500).json({ error: "Failed to get user" });
        }
    }
}
exports.GetUserController = GetUserController;
//# sourceMappingURL=GetUserController.js.map