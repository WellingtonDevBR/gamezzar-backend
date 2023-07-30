import { IRegionRepository } from "../../../../../domain/repository/IRegionRepository";
import { RegionModel } from "../../models/Region";

export class SqlServerRegionRepository implements IRegionRepository {
  async getByName(name: string): Promise<any> {
    const region = await RegionModel.findOne({
      raw: true,
      where: {
        Name: name,
      },
    });
    return region;
  }
}
