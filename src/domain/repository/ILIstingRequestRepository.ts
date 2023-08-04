import { ListingRequest } from "../entities/ListingRequest";

export interface IListingRequestRepository {
  create(listingRequest: ListingRequest): Promise<any>;
}
