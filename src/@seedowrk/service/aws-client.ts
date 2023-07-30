import AWS from "aws-sdk";
require("dotenv").config();

export class AwsClient {
  private s3: AWS.S3;
  private secretsManager: AWS.SecretsManager;

  constructor(accessKeyId?: string, secretAccessKey?: string) {
    this.s3 = new AWS.S3({
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
    });

    this.secretsManager = new AWS.SecretsManager({
      region: "us-east-2",
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
}
