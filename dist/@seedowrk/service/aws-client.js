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
        this.lambda = new aws_sdk_1.default.Lambda({
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
    async sendWelcomingEmail({ email, firstName, lastName, }) {
        const params = {
            FunctionName: "welcome_email_function",
            InvocationType: "RequestResponse",
            Payload: JSON.stringify({
                email: email,
                first_name: firstName,
                last_name: lastName,
            }),
        };
        try {
            const result = await this.lambda.invoke(params).promise();
            return JSON.parse(result.Payload);
        }
        catch (err) {
            console.error("Error invoking Lambda function:", err);
            throw err;
        }
    }
    async sendNewTradeEmail({ proposalId, bidderFirstName, bidderGameImg, bidderGameName, receiverEmail, receiverFirstName, receiverGameImg, receiverGameName, }) {
        const params = {
            FunctionName: "new_trade_email_function",
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
            return JSON.parse(result.Payload);
        }
        catch (err) {
            console.error("Error invoking Lambda function:", err);
            throw err;
        }
    }
}
exports.AwsClient = AwsClient;
//# sourceMappingURL=aws-client.js.map