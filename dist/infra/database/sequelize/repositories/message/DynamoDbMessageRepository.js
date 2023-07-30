"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamoDbMessageRepository = void 0;
const dynamodb_1 = __importDefault(require("aws-sdk/clients/dynamodb"));
class DynamoDbMessageRepository {
    constructor() {
        this.dynamoDb = new dynamodb_1.default.DocumentClient({ region: "us-east-2" });
        this.tableName = "message";
    }
    async save(message) {
        const retrievedMessage = message.getAllMessageInformation();
        const params = {
            TableName: this.tableName,
            Item: {
                MessageId: message.getId(),
                ChatId: retrievedMessage.chatId,
                SenderId: retrievedMessage.senderId,
                ReceiverId: retrievedMessage.receiverId,
                Content: retrievedMessage.content,
                UpdatedAt: new Date().toISOString(),
                CreatedAt: new Date().toISOString(),
            },
        };
        return await this.dynamoDb.put(params).promise();
    }
    async retrieveAllMensagesByChatId(chatId) {
        const params = {
            TableName: this.tableName,
            IndexName: "ChatIdIndex",
            KeyConditionExpression: "ChatId = :chatId",
            ExpressionAttributeValues: {
                ":chatId": chatId,
            },
        };
        return await this.dynamoDb.query(params).promise();
    }
}
exports.DynamoDbMessageRepository = DynamoDbMessageRepository;
//# sourceMappingURL=DynamoDbMessageRepository.js.map