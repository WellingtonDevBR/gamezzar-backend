"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserController = void 0;
const LoginUserUseCase_1 = require("../../../../application/use-cases/user/login/LoginUserUseCase");
class LoginUserController {
    constructor(loginUserUseCase) {
        this.loginUserUseCase = loginUserUseCase;
    }
    async handle(request, response) {
        const { email, password } = request.body;
        try {
            const result = await this.loginUserUseCase.execute({
                email,
                password,
            });
            return response.status(200).json(result);
        }
        catch (error) {
            if (error instanceof LoginUserUseCase_1.UserNotFoundException) {
                return response.status(404).json({
                    status: "error",
                    message: "User not found.",
                });
            }
            if (error instanceof LoginUserUseCase_1.UserPasswordIsInvalidException) {
                return response.status(401).json({
                    status: "error",
                    message: "Password is invalid",
                });
            }
            return response.status(400).json({
                message: "Unexpected Error",
            });
        }
    }
}
exports.LoginUserController = LoginUserController;
//# sourceMappingURL=LoginUserController.js.map