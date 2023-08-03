"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDetailsByIdController = void 0;
class UpdateDetailsByIdController {
    constructor(updateDetailsByIdUseCase) {
        this.updateDetailsByIdUseCase = updateDetailsByIdUseCase;
    }
    async handle(request, response) {
        try {
            const { userId, email, phone, gender, address, password, country, dob } = request.body;
            const result = await this.updateDetailsByIdUseCase.execute({
                userId,
                email,
                mobileNumber: phone,
                address,
                gender,
                password,
                country,
                dob,
            });
            return response.status(200).json(result);
        }
        catch (error) {
            return response.status(400).json({ message: error });
        }
    }
}
exports.UpdateDetailsByIdController = UpdateDetailsByIdController;
//# sourceMappingURL=UpdateDetailsByIdController.js.map