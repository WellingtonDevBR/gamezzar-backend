import { UseCase } from "../../../../@seedowrk/domain/usecase";
import { AwsClient } from "../../../../@seedowrk/service/aws-client";
import { ProposeFactory } from "../../../../domain/factories/ProposeFactory";
import { IGameRepository } from "../../../../domain/repository/IGameRepository";
import { IProposeRepository } from "../../../../domain/repository/IProposeRepository";
import { IUserRepository } from "../../../../domain/repository/IUserRepository";

interface Input {
  bidderId: string;
  receiverId: string;
  bidderGameId: string;
  receiverGameId: string;
  status: string;
}
interface Output {}

export class CreateProposeUseCase implements UseCase<Input, Output> {
  constructor(
    private proposeRepository: IProposeRepository,
    private userRepository: IUserRepository,
    private gameRepository: IGameRepository
  ) {}
  async execute(input: Input): Promise<Output> {
    const proposeFactory = ProposeFactory.create(
      input.bidderId,
      input.receiverId,
      input.bidderGameId,
      input.receiverGameId,
      input.status
    );
    const proposeCreated = await this.proposeRepository.create(proposeFactory);
    if (!proposeCreated) {
      throw new Error("Propose not created");
    }

    const bidder = await this.userRepository.getById(input.bidderId);
    const receiver = await this.userRepository.getById(input.receiverId);
    const bidderGame = await this.gameRepository.getById(input.bidderGameId);
    const receiverGame = await this.gameRepository.getById(
      input.receiverGameId
    );

    await new AwsClient(
      process.env.AWS_S3_ACCESS_KEY_ID,
      process.env.AWS_S3_SECRET_ACCESS_KEY
    ).sendNewTradeEmail({
      proposalId: proposeFactory.getId(),
      bidderFirstName: bidder.FirstName,
      bidderGameName: bidderGame.Title,
      bidderGameImg: bidderGame.Image,
      receiverEmail: receiver.Email,
      receiverGameName: receiverGame.Title,
      receiverGameImg: receiverGame.Image,
      receiverFirstName: receiver.FirstName,
    });

    return {
      status: "success",
      message: "Propose created",
    };
  }
}
