import { Propose } from "../entities/Propose";

export class ProposeFactory {
  static create(
    interestedGameId: string,
    ownerGameId: string,
    interestedUserId: string,
    ownerUserId: string,
    status: string
  ): Propose {
    return Propose.createPropose({
      interestedGameId,
      ownerGameId,
      interestedUserId,
      ownerUserId,
      status,
    });
  }
}
