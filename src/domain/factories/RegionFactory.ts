import { Region } from "../entities/Region";

export class RegionFactory {
  static create(name: string, status: boolean): Region {
    return Region.createRegion({ name, status });
  }
}
