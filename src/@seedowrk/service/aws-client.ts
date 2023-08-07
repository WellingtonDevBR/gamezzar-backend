import AWS from "aws-sdk";
require("dotenv").config();

export class AwsClient {
  private s3: AWS.S3;
  private secretsManager: AWS.SecretsManager;
  private lambda: AWS.Lambda;

  constructor(accessKeyId?: string, secretAccessKey?: string) {
    this.s3 = new AWS.S3({
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
    });

    this.secretsManager = new AWS.SecretsManager({
      region: "us-east-2",
    });

    this.lambda = new AWS.Lambda({
      region: "us-east-2", // Update the region if necessary
    });
  }

  async fetchSecrets(secretName: string): Promise<any> {
    try {
      const data = await this.secretsManager
        .getSecretValue({ SecretId: secretName })
        .promise();

      if (data.SecretString) {
        return JSON.parse(data.SecretString);
      } else if (data.SecretBinary) {
        return JSON.parse(data.SecretBinary.toString());
      } else {
        throw new Error("Secret value not found or in an unexpected format.");
      }
    } catch (err) {
      console.error("Error fetching secret:", err);
      throw err;
    }
  }

  async uploadFile(
    bucketName: string,
    key: string,
    blob: Buffer,
    options: any = {}
  ): Promise<AWS.S3.ManagedUpload.SendData> {
    return await this.s3
      .upload({
        Bucket: bucketName,
        Key: key,
        Body: blob,
        ...options,
      })
      .promise();
  }

  async getFile(bucketName: string, key: string): Promise<AWS.S3.Body> {
    const params = {
      Bucket: bucketName,
      Key: key,
    };

    return await this.s3.getObject(params).promise();
  }

  async sendWelcomingEmail({
    email,
    firstName,
    lastName,
  }: EmailProps): Promise<any> {
    const params = {
      FunctionName: "welcome_email_function", // Replace with your Lambda function name
      InvocationType: "RequestResponse",
      Payload: JSON.stringify({
        email: email,
        first_name: firstName,
        last_name: lastName,
      }),
    };

    try {
      const result = await this.lambda.invoke(params).promise();
      return JSON.parse(result.Payload as string);
    } catch (err) {
      console.error("Error invoking Lambda function:", err);
      throw err;
    }
  }

  async sendNewTradeEmail({
    proposalId,
    bidderFirstName,
    bidderGameImg,
    bidderGameName,
    receiverEmail,
    receiverFirstName,
    receiverGameImg,
    receiverGameName,
  }: NewTradeProps): Promise<any> {
    const params = {
      FunctionName: "new_trade_email_function", // Replace with your Lambda function name
      InvocationType: "RequestResponse",
      Payload: JSON.stringify({
        proposal_id: proposalId,
        bidder_first_name: bidderFirstName,
        bidder_game_image: bidderGameImg,
        bidder_game_name: bidderGameName,
        receiver_email: receiverEmail,
        receiver_first_name: receiverFirstName,
        receiver_game_image: receiverGameImg,
        receiver_game_name: receiverGameName,
      }),
    };

    try {
      const result = await this.lambda.invoke(params).promise();
      return JSON.parse(result.Payload as string);
    } catch (err) {
      console.error("Error invoking Lambda function:", err);
      throw err;
    }
  }
}

interface EmailProps {
  email: string;
  firstName: string;
  lastName: string;
}

interface NewTradeProps {
  proposalId: string;
  receiverEmail: string;
  receiverFirstName: string;
  bidderFirstName: string;
  bidderGameName: string;
  bidderGameImg: string;
  receiverGameName: string;
  receiverGameImg: string;
}
