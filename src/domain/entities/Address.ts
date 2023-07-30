import { Entity } from "../../@seedowrk/domain/entity";

interface AddressProps {
  id?: string;
  userId: string;
  address: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
}

export class Address extends Entity<AddressProps> {
  private constructor(props: AddressProps, id?: string) {
    super(props, id);
  }

  static createAddress(props: AddressProps, id?: string) {
    const user = new Address(props, id);
    return user;
  }
}
