import { ListingRequest } from "../entities/ListingRequest";

export class ListingRequestFactory {
  static create(
    fullName: string,
    email: string,
    gameTitle: string,
    platform: string,
    region: string,
    description?: string,
    officialLink?: string,
    imagePath?: string,
    status?: string
  ): ListingRequest {
    return ListingRequest.createListingRequest({
      fullName,
      email,
      gameTitle,
      description,
      platform,
      region,
      officialLink,
      imagePath,
      status,
    });
  }
}
