import { IEditionRepository } from "../../../../../domain/repository/IEditionRepository";
import { EditionModel } from "../../models/Edition";

export class SqlServerEditionRepository implements IEditionRepository {
  async getByName(name: string): Promise<any> {
    return await EditionModel.findOne({
      where: {
        Name: name,
      },
    });
  }
}
