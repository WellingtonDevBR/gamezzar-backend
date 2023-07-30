"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserConversationController = void 0;
const ConversationFactory_1 = require("../../../../domain/factories/ConversationFactory");
const MessageFactory_1 = require("../../../../domain/factories/MessageFactory");
class CreateUserConversationController {
    constructor(userRepository, conversationRepository, userConversationRepository) {
        this.userRepository = userRepository;
        this.conversationRepository = conversationRepository;
        this.userConversationRepository = userConversationRepository;
    }
    async execute({ senderId, receiverId, content, gameId }) {
        const sender = await this.userRepository.getById(senderId);
        const receiver = await this.userRepository.getById(receiverId);
        if (!sender || !receiver) {
            throw new Error('One or both users not found');
        }
        let conversation = await this.conversationRepository.getByUsers(senderId, receiverId);
        if (!conversation) {
            conversation = ConversationFactory_1.ConversationFactory.create(senderId, receiverId);
            await this.conversationRepository.save(conversation);
        }
        const message = MessageFactory_1.UserConversationFactory.create('unique_message_id', content, senderId, receiverId, gameId, 'sent');
        await this.userConversationRepository.save(message);
    }
}
exports.CreateUserConversationController = CreateUserConversationController;
//# sourceMappingURL=UserConversationCreateController.js.map