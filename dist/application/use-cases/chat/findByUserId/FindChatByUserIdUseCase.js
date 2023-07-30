"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindChatByUserIdUseCase = void 0;
const objectConverter_1 = require("../../../../@seedowrk/helper/objectConverter");
class FindChatByUserIdUseCase {
    constructor(chatRepository, userRepository) {
        this.chatRepository = chatRepository;
        this.userRepository = userRepository;
    }
    async execute(input) {
        const chats = await this.chatRepository.findByUserId(input.userId);
        const otherUserIds = chats.map((chat) => {
            return chat.User1Id === input.userId ? chat.User2Id : chat.User1Id;
        });
        const otherUsers = await Promise.all(otherUserIds.map((id) => this.userRepository.getById(id)));
        const formattedChats = chats.map((chat, index) => {
            return (0, objectConverter_1.convertObjectToSnakeCase)({
                ...chat,
                user: otherUsers[index],
            });
        });
        return formattedChats;
    }
}
exports.FindChatByUserIdUseCase = FindChatByUserIdUseCase;
//# sourceMappingURL=FindChatByUserIdUseCase.js.map