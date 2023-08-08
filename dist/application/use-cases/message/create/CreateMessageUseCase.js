"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMessageUseCase = void 0;
const objectConverter_1 = require("../../../../@seedowrk/helper/objectConverter");
const ChatFactory_1 = require("../../../../domain/factories/ChatFactory");
const MessageFactory_1 = require("../../../../domain/factories/MessageFactory");
class CreateMessageUseCase {
    constructor(messageRepository, chatRepository) {
        this.messageRepository = messageRepository;
        this.chatRepository = chatRepository;
    }
    async execute(input) {
        const existingChat = await this.chatRepository.findExistingChat(input.senderId, input.receiverId, input.gameId);
        if (existingChat) {
            const messageFactory = MessageFactory_1.MessageFactory.create(existingChat.ChatId, input.senderId, input.receiverId, input.content);
            await this.messageRepository.save(messageFactory);
            return {
                chat_id: existingChat.ChatId,
            };
        }
        const chatFactory = ChatFactory_1.ChatFactory.create(input.senderId, input.receiverId, input.gameId);
        const chat = await this.chatRepository.save(chatFactory);
        const messageFactory = MessageFactory_1.MessageFactory.create(chat.chatId, input.senderId, input.receiverId, input.content);
        const message = this.messageRepository.save(messageFactory);
        const formattedMessage = (0, objectConverter_1.convertObjectToSnakeCase)(message);
        return {
            chat_id: chatFactory.getId(),
        };
    }
}
exports.CreateMessageUseCase = CreateMessageUseCase;
//# sourceMappingURL=CreateMessageUseCase.js.map