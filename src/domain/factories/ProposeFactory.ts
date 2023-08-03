import { Propose } from "../entities/Propose";

export class ProposeFactory {
  static create(
    bidderId: string,
    receiverId: string,
    bidderGameId: string,
    receiverGameId: string,

    status: string
  ): Propose {
    return Propose.createPropose({
      bidderId,
      receiverId,
      bidderGameId,
      receiverGameId,
      status,
    });
  }
}
