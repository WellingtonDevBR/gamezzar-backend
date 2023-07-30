import { Propose } from "../entities/Propose";

export interface IProposeRepository {
  create(data: Propose): Promise<any>;
  getByUserId(userId: string): Promise<any>;
}
