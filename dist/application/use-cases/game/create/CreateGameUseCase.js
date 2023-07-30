"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGameUseCase = void 0;
const aws_client_1 = require("../../../../@seedowrk/service/aws-client");
const GameFactory_1 = require("../../../../domain/factories/GameFactory");
const fs_1 = __importDefault(require("fs"));
require("dotenv").config();
class CreateGameUseCase {
    constructor(gameRepository, imageToPngConverter) {
        this.gameRepository = gameRepository;
        this.imageToPngConverter = imageToPngConverter;
    }
    async execute(data) {
        const awsClient = new aws_client_1.AwsClient();
        const secrets = await awsClient.fetchSecrets("gamezzar-backend");
        const s3 = new aws_client_1.AwsClient(secrets.AWS_ACCESS_KEY_ID, secrets.AWS_SECRET_KEY);
        const imagePath = data.fileContent.path;
        const pngPath = await this.imageToPngConverter.convertImageToPng(imagePath);
        const pngBlob = fs_1.default.readFileSync(pngPath);
        const pngFilename = data.fileContent.filename.replace(/\.[^/.]+$/, "") + ".png";
        await s3.uploadFile(secrets.AWS_S3_BUCKET_NAME, `games/${pngFilename}`, pngBlob, {
            ContentDisposition: "inline",
            ContentType: "image/png",
        });
        const game = GameFactory_1.GameFactory.create(data.title, data.description, data.region, data.releaseDate, data.producer, data.category, data.genre, data.officialLink, pngFilename, data.slug, data.status);
        await this.gameRepository.create(game);
        return "Game created";
    }
}
exports.CreateGameUseCase = CreateGameUseCase;
//# sourceMappingURL=CreateGameUseCase.js.map