import { Platform } from "../entities/Platform";

export class PlatformFactory {
  static create(
    name: string,
    image: string,
    brand: string,
    slug: string,
    status: number
  ): Platform {
    return Platform.createPlatform({ name, image, brand, slug, status });
  }
}
