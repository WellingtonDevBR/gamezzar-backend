"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
class CreateUserController {
    constructor(userCreateUseCase) {
        this.userCreateUseCase = userCreateUseCase;
    }
    async handle(request, response) {
        try {
            const { first_name, last_name, user_name, avatar, email, password, address } = request.body;
            const output = await this.userCreateUseCase.execute({
                firstname: first_name,
                lastname: last_name,
                username: user_name,
                avatar,
                email,
                password,
            });
            response.status(201).send({
                status: "success",
                token: output.token,
            });
        }
        catch (error) {
            response.status(400).send({
                status: "error",
                message: error.message,
            });
        }
    }
}
exports.CreateUserController = CreateUserController;
//# sourceMappingURL=CreateUserController.js.map