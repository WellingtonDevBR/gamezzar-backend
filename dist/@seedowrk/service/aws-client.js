"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AwsClient = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
require("dotenv").config();
class AwsClient {
    constructor(accessKeyId, secretAccessKey) {
        this.s3 = new aws_sdk_1.default.S3({
            accessKeyId: accessKeyId,
            secretAccessKey: secretAccessKey,
        });
        this.secretsManager = new aws_sdk_1.default.SecretsManager({
            region: "us-east-2",
        });
    }
    async fetchSecrets(secretName) {
        try {
            const data = await this.secretsManager
                .getSecretValue({ SecretId: secretName })
                .promise();
            if (data.SecretString) {
                return JSON.parse(data.SecretString);
            }
            else if (data.SecretBinary) {
                return JSON.parse(data.SecretBinary.toString());
            }
            else {
                throw new Error("Secret value not found or in an unexpected format.");
            }
        }
        catch (err) {
            console.error("Error fetching secret:", err);
            throw err;
        }
    }
    async uploadFile(bucketName, key, blob, options = {}) {
        return await this.s3
            .upload({
            Bucket: bucketName,
            Key: key,
            Body: blob,
            ...options,
        })
            .promise();
    }
    async getFile(bucketName, key) {
        const params = {
            Bucket: bucketName,
            Key: key,
        };
        return await this.s3.getObject(params).promise();
    }
}
exports.AwsClient = AwsClient;
//# sourceMappingURL=aws-client.js.map