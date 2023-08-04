"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateListingRequestUseCase = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const ListingRequestFactory_1 = require("../../../../domain/factories/ListingRequestFactory");
const constants_1 = require("../../../../@seedowrk/helper/constants");
require("dotenv").config();
class CreateListingRequestUseCase {
    constructor(listingRequestRepository) {
        this.listingRequestRepository = listingRequestRepository;
    }
    async execute(input) {
        const imageName = (0, constants_1.generateRandomString)(10);
        const createListingRequest = ListingRequestFactory_1.ListingRequestFactory.create(input.fullName, input.email, input.gameTitle, input.platform, input.region, input.description, input.officialLink, imageName, input.status);
        console.log(createListingRequest);
        await this.listingRequestRepository.create(createListingRequest);
        uploadBase64ImageToS3(input.imagePath, imageName);
        return {
            status: "success",
            message: "Successfully created",
        };
    }
}
exports.CreateListingRequestUseCase = CreateListingRequestUseCase;
function uploadBase64ImageToS3(base64Data, keyName) {
    aws_sdk_1.default.config.update({
        accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION_NAME,
    });
    const s3 = new aws_sdk_1.default.S3();
    const base64Image = base64Data.replace(/^data:image\/\w+;base64,/, "");
    const imageBuffer = Buffer.from(base64Image, "base64");
    const params = {
        Bucket: "gamezzar-images",
        Key: `requests/${keyName}.jpg`,
        Body: imageBuffer,
        ACL: "public-read",
        ContentType: "image/jpeg",
    };
    s3.upload(params, (err, data) => {
        if (err) {
            console.error("Error uploading to S3:", err);
        }
        else {
            console.log("Image uploaded successfully to S3:", data.Location);
        }
    });
}
//# sourceMappingURL=CreateListingRequestUseCase.js.map