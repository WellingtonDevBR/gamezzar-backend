import { DynamoDB } from "aws-sdk";
import { ListingRequest } from "../../../../../domain/entities/ListingRequest";
import { IListingRequestRepository } from "../../../../../domain/repository/ILIstingRequestRepository";

export class DynamoDbListingRequestRepository
  implements IListingRequestRepository
{
  private dynamoDb: DynamoDB.DocumentClient;
  private tableName: string;

  constructor() {
    this.dynamoDb = new DynamoDB.DocumentClient({ region: "us-east-2" });
    this.tableName = "listing-request";
  }

  async create(listingRequest: ListingRequest): Promise<any> {
    const listingRequestInformation =
      listingRequest.getAllListingRequestInformation();
    const params = {
      TableName: this.tableName,
      Item: {
        ListingRequestId: listingRequest.getId(),
        FullName: listingRequestInformation.fullName,
        Email: listingRequestInformation.email,
        GameTitle: listingRequestInformation.gameTitle,
        Description: listingRequestInformation.description,
        ImagePath: listingRequestInformation.imagePath,
        Platform: listingRequestInformation.platform,
        Region: listingRequestInformation.region,
        Status: listingRequestInformation.status,
        UpdatedAt: new Date().toISOString(),
        CreatedAt: new Date().toISOString(),
      },
    };

    return await this.dynamoDb.put(params).promise();
  }
}
