import AWS from "aws-sdk";
import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { ListingRequestFactory } from "../../../../domain/factories/ListingRequestFactory";
import { IListingRequestRepository } from "../../../../domain/repository/ILIstingRequestRepository";
import multer from "multer";
import { generateRandomString } from "../../../../@seedowrk/helper/constants";
require("dotenv").config();

interface Input {
  fullName: string;
  email: string;
  gameTitle: string;
  description: string;
  imagePath: string;
  platform: string;
  region: string;
  officialLink?: string;
  status: string;
}
interface Output {}

export class CreateListingRequestUseCase implements UseCase<Input, Output> {
  constructor(private listingRequestRepository: IListingRequestRepository) {}
  async execute(input: Input): Promise<Output> {
    const imageName = generateRandomString(10);
    const createListingRequest = ListingRequestFactory.create(
      input.fullName,
      input.email,
      input.gameTitle,
      input.platform,
      input.region,
      input.description,
      input.officialLink,
      imageName,
      input.status
    );
    console.log(createListingRequest);
    await this.listingRequestRepository.create(createListingRequest);

    uploadBase64ImageToS3(input.imagePath, imageName);
    return {
      status: "success",
      message: "Successfully created",
    };
  }
}

function uploadBase64ImageToS3(base64Data: string, keyName: string) {
  AWS.config.update({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION_NAME,
  });

  const s3 = new AWS.S3();
  const base64Image = base64Data.replace(/^data:image\/\w+;base64,/, "");
  const imageBuffer = Buffer.from(base64Image, "base64");

  const params = {
    Bucket: "gamezzar-images",
    Key: `requests/${keyName}.jpg`,
    Body: imageBuffer,
    ACL: "public-read",
    ContentType: "image/jpeg",
  };

  // Upload the image to S3
  s3.upload(params, (err: any, data: any) => {
    if (err) {
      console.error("Error uploading to S3:", err);
    } else {
      console.log("Image uploaded successfully to S3:", data.Location);
    }
  });
}
