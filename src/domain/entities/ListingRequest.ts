import { Entity } from "../../@seedowrk/domain/entity";

interface ListingRequestProps {
  id?: string;
  fullName: string;
  email: string;
  gameTitle: string;
  description?: string;
  platform: string;
  region: string;
  imagePath?: string;
  officialLink?: string;
  status?: string;
}

export class ListingRequest extends Entity<ListingRequestProps> {
  private constructor(props: ListingRequestProps, id?: string) {
    super(props, id);
  }

  static createListingRequest(
    props: ListingRequestProps,
    id?: string
  ): ListingRequest {
    return new ListingRequest(props, id);
  }

  getAllListingRequestInformation(): ListingRequestProps {
    return { ...this.props, id: this.getId() };
  }
}
