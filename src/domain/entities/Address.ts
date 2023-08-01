import { Entity } from "../../@seedowrk/domain/entity";

interface AddressProps {
  id?: string;
  userId: string;
  address: string;
  country: string;
}

export class Address extends Entity<AddressProps> {
  private constructor(props: AddressProps, id?: string) {
    super(props, id);
  }

  static createAddress(props: AddressProps, id?: string) {
    const address = new Address(props, id);
    return address;
  }

  getAllAddressInformation(): AddressProps {
    return { ...this.props, id: this.getId() };
  }
}
