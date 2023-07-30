"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUserGameByUserIdUseCase = void 0;
const objectConverter_1 = require("../../../../@seedowrk/helper/objectConverter");
class GetAllUserGameByUserIdUseCase {
    constructor(userGameRepository) {
        this.userGameRepository = userGameRepository;
    }
    async execute(request) {
        const collection = await this.userGameRepository.getAllByUserId(request.userId);
        const formattedCollection = (0, objectConverter_1.convertObjectToSnakeCase)(collection);
        return formattedCollection;
    }
}
exports.GetAllUserGameByUserIdUseCase = GetAllUserGameByUserIdUseCase;
//# sourceMappingURL=GetAllUserGameByUserIdUseCase.js.map