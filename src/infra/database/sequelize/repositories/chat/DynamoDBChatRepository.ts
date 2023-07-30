import { DynamoDB } from "aws-sdk";
import { IChatRepository } from "../../../../../domain/repository/IChatRepository";
import { Chat } from "../../../../../domain/entities/Chat";
import { DocumentClient } from "aws-sdk/clients/dynamodb";

export class DynamoDbChatRepository implements IChatRepository {
  private dynamoDb: DynamoDB.DocumentClient;
  private tableName: string;

  constructor() {
    this.dynamoDb = new DynamoDB.DocumentClient({ region: "us-east-2" });
    this.tableName = "chat";
  }

  async findByUserId(userId: string): Promise<Array<Chat> | null> {
    const params: DocumentClient.ScanInput = {
      TableName: this.tableName,
      FilterExpression: "User1Id = :userId OR User2Id = :userId",
      ExpressionAttributeValues: {
        ":userId": userId,
      },
    };

    const response: DocumentClient.ScanOutput = await this.dynamoDb
      .scan(params)
      .promise();

    if (!response.Items || response.Items.length === 0) {
      return null;
    }

    // Return all chats where the given userId is either User1Id or User2Id
    return response.Items as Array<Chat>;
  }

  async save(chat: Chat): Promise<any> {
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

  async findExistingChat(
    user1Id: string,
    user2Id: string,
    gameId: string
  ): Promise<Chat | null> {
    // Scan the entire table
    const params: DocumentClient.ScanInput = {
      TableName: this.tableName,
      FilterExpression:
        "(User1Id = :user1Id AND User2Id = :user2Id AND GameId = :gameId) OR (User1Id = :user2Id AND User2Id = :user1Id AND GameId = :gameId)",
      ExpressionAttributeValues: {
        ":user1Id": user1Id,
        ":user2Id": user2Id,
        ":gameId": gameId,
      },
    };

    const response: DocumentClient.ScanOutput = await this.dynamoDb
      .scan(params)
      .promise();

    if (!response.Items || response.Items.length === 0) {
      return null;
    }

    // Return the first item (chat) found
    return response.Items[0] as Chat;
  }
}
