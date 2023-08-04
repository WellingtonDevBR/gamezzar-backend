"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamoDbListingRequestRepository = void 0;
const aws_sdk_1 = require("aws-sdk");
class DynamoDbListingRequestRepository {
    constructor() {
        this.dynamoDb = new aws_sdk_1.DynamoDB.DocumentClient({ region: "us-east-2" });
        this.tableName = "listing-request";
    }
    async create(listingRequest) {
        const listingRequestInformation = listingRequest.getAllListingRequestInformation();
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
exports.DynamoDbListingRequestRepository = DynamoDbListingRequestRepository;
//# sourceMappingURL=DynamoDbListingRequestRepository.js.map