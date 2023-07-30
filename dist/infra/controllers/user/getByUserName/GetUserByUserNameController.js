"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByUserNameController = void 0;
class GetUserByUserNameController {
    constructor(getUserByUserName) {
        this.getUserByUserName = getUserByUserName;
    }
    async handle(request, response) {
        try {
            const { user_name } = request.params;
            const user = await this.getUserByUserName.execute({
                userName: user_name,
            });
            response.status(200).json(user);
        }
        catch (error) {
            response.status(400).json({ message: error });
        }
    }
}
exports.GetUserByUserNameController = GetUserByUserNameController;
//# sourceMappingURL=GetUserByUserNameController.js.map