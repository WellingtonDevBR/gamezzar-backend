"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUserGameController = void 0;
const paseto_1 = require("paseto");
const crypto_1 = require("crypto");
const constants_1 = require("../../../../@seedowrk/helper/constants");
class GetAllUserGameController {
    constructor(getAllUserGameUseCase) {
        this.getAllUserGameUseCase = getAllUserGameUseCase;
    }
    async handle(request, response) {
        try {
            const { offset } = request.query;
            const authHeader = request.headers.authorization;
            const token = authHeader?.split(" ")[1];
            if (token == "undefined" || token == undefined) {
                const result = await this.getAllUserGameUseCase.execute({
                    offset: Number(offset),
                });
                return response.status(200).json(result);
            }
            else {
                const privateKey = (0, crypto_1.createPrivateKey)({
                    key: constants_1.PASETO_PRIVATE_KEY,
                    format: "pem",
                    type: "pkcs8",
                });
                const token = authHeader.split(" ")[1];
                const payload = await paseto_1.V4.verify(token, privateKey);
                const userId = payload.userId;
                const result = await this.getAllUserGameUseCase.execute({
                    offset: Number(offset),
                    userId: userId,
                });
                return response.status(200).json(result);
            }
        }
        catch (error) {
            return response.status(500).json({
                message: error || "Unexpected error.",
            });
        }
    }
}
exports.GetAllUserGameController = GetAllUserGameController;
//# sourceMappingURL=GetAllUserGameController.js.map