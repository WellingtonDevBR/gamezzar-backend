"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetrieveAllMessagesByChatIdUseCase = void 0;
const objectConverter_1 = require("../../../../@seedowrk/helper/objectConverter");
class RetrieveAllMessagesByChatIdUseCase {
    constructor(messageRepository) {
        this.messageRepository = messageRepository;
    }
    async execute(input) {
        const chat = await this.messageRepository.retrieveAllMensagesByChatId(input.chatId);
        const formattedChat = (0, objectConverter_1.convertObjectToSnakeCase)(chat);
        return formattedChat;
    }
}
exports.RetrieveAllMessagesByChatIdUseCase = RetrieveAllMessagesByChatIdUseCase;
//# sourceMappingURL=RetrieveAllMessagesByChatIdUseCase.js.map