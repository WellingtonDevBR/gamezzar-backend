"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamoDbUserConversationRepository = void 0;
const aws_sdk_1 = require("aws-sdk");
class DynamoDbUserConversationRepository {
    constructor() {
        this.dynamoDb = new aws_sdk_1.DynamoDB.DocumentClient();
        this.tableName = 'Conversations';
    }
    save(message) {
        throw new Error("Method not implemented.");
    }
}
exports.DynamoDbUserConversationRepository = DynamoDbUserConversationRepository;
//# sourceMappingURL=DynamoDbConversation.js.map