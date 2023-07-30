import DynamoDB from "aws-sdk/clients/dynamodb";
import { Message } from "../../../../../domain/entities/Message";
import { IMessageRepository } from "../../../../../domain/repository/IMessageRepository";

export class DynamoDbMessageRepository implements IMessageRepository {
  private dynamoDb: DynamoDB.DocumentClient;
  private tableName: string;

  constructor() {
    this.dynamoDb = new DynamoDB.DocumentClient({ region: "us-east-2" });
    this.tableName = "message";
  }

  async save(message: Message): Promise<any> {
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

  async retrieveAllMensagesByChatId(chatId: string): Promise<any> {
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
