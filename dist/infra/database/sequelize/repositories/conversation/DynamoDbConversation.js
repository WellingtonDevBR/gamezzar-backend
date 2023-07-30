"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamoDbConversationRepository = void 0;
const aws_sdk_1 = require("aws-sdk");
const Conversation_1 = require("../../../../../domain/entities/Conversation");
class DynamoDbConversationRepository {
    constructor() {
        this.dynamoDb = new aws_sdk_1.DynamoDB.DocumentClient();
        this.tableName = 'Conversations';
    }
    async getByUsers(userOneId, userTwoId) {
        const params = {
            TableName: this.tableName,
            Key: { userOneId, userTwoId },
        };
        const result = await this.dynamoDb.get(params).promise();
        return result.Item ? Conversation_1.Conversation.createConversation(result.Item) : null;
    }
    async save(conversation) {
        const params = {
            TableName: this.tableName,
            Item: conversation,
        };
        await this.dynamoDb.put(params).promise();
    }
}
exports.DynamoDbConversationRepository = DynamoDbConversationRepository;
//# sourceMappingURL=DynamoDbConversation.js.map