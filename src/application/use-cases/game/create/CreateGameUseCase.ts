import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { ImageToPngConverter } from "../../../../@seedowrk/helper/imageConverter";
import { AwsClient } from "../../../../@seedowrk/service/aws-client";
import { GameFactory } from "../../../../domain/factories/GameFactory";
import { IGameRepository } from "../../../../domain/repository/IGameRepository";
import { ICreateGameInputDTO } from "../../../dto/game/create/ICreateGameInputDTO";
import { ICreateGameOutputDTO } from "../../../dto/game/create/ICreateGameOutputDTO";
import fs from "fs";
require("dotenv").config();

export class CreateGameUseCase
  implements UseCase<ICreateGameInputDTO, ICreateGameOutputDTO>
{
  constructor(
    private gameRepository: IGameRepository,
    private imageToPngConverter: ImageToPngConverter
  ) {}

  async execute(data: ICreateGameInputDTO): Promise<ICreateGameOutputDTO> {
    const awsClient = new AwsClient();
    const secrets = await awsClient.fetchSecrets("gamezzar-backend");
    const s3 = new AwsClient(secrets.AWS_ACCESS_KEY_ID, secrets.AWS_SECRET_KEY);

    const imagePath = data.fileContent.path;

    // Convert image to png and upload the PNG file
    const pngPath = await this.imageToPngConverter.convertImageToPng(imagePath);
    const pngBlob = fs.readFileSync(pngPath);
    const pngFilename =
      data.fileContent.filename.replace(/\.[^/.]+$/, "") + ".png";

  await s3.uploadFile(secrets.AWS_S3_BUCKET_NAME!, `games/${pngFilename}`, pngBlob, {
      ContentDisposition: "inline",
      ContentType: "image/png",
    });

    const game = GameFactory.create(
      data.title,
      data.description,
      data.region,
      data.releaseDate,
      data.producer,
      data.category,
      data.genre,
      data.officialLink,
      pngFilename,
      data.slug,
      data.status
    );

    await this.gameRepository.create(game);

    return "Game created";
  }
}
