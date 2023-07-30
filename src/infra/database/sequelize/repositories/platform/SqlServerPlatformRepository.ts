import { IPlatformRepository } from "../../../../../domain/repository/IPlatformRepository";
import { PlatformModel } from "../../models/Platform";

export class SqlServerPlatformRepository implements IPlatformRepository {
  async getByName(name: string): Promise<any> {
    const platform = await PlatformModel.findOne({
      raw: true,
      where: {
        Name: name,
      },
    });
    return platform;
  }
}
