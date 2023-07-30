"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamoDbChatRepository = void 0;
const aws_sdk_1 = require("aws-sdk");
class DynamoDbChatRepository {
    constructor() {
        this.dynamoDb = new aws_sdk_1.DynamoDB.DocumentClient({ region: "us-east-2" });
        this.tableName = "chat";
    }
    async findByUserId(userId) {
        const params = {
            TableName: this.tableName,
            FilterExpression: "User1Id = :userId OR User2Id = :userId",
            ExpressionAttributeValues: {
                ":userId": userId,
            },
        };
        const response = await this.dynamoDb
            .scan(params)
            .promise();
        if (!response.Items || response.Items.length === 0) {
            return null;
        }
        return response.Items;
    }
    async save(chat) {
        const retrievedChat = chat.getAllChatInformation();
        const params = {
            TableName: this.tableName,
            Item: {
                ChatId: chat.getId(),
                User1Id: retrievedChat.user1Id,
                User2Id: retrievedChat.user2Id,
                GameId: retrievedChat.gameId,
                UpdatedAt: new Date().toISOString(),
                CreatedAt: new Date().toISOString(),
            },
        };
        await this.dynamoDb.put(params).promise();
        return {
            chatId: chat.getId(),
            user1Id: retrievedChat.user1Id,
            user2Id: retrievedChat.user2Id,
            gameId: retrievedChat.gameId,
        };
    }
    async findExistingChat(user1Id, user2Id, gameId) {
        const params = {
            TableName: this.tableName,
            FilterExpression: "(User1Id = :user1Id AND User2Id = :user2Id AND GameId = :gameId) OR (User1Id = :user2Id AND User2Id = :user1Id AND GameId = :gameId)",
            ExpressionAttributeValues: {
                ":user1Id": user1Id,
                ":user2Id": user2Id,
                ":gameId": gameId,
            },
        };
        const response = await this.dynamoDb
            .scan(params)
            .promise();
        if (!response.Items || response.Items.length === 0) {
            return null;
        }
        return response.Items[0];
    }
}
exports.DynamoDbChatRepository = DynamoDbChatRepository;
//# sourceMappingURL=DynamoDBChatRepository.js.map