import { Address } from "../entities/Address";

export class AddressFactory {
  static create(
    userId: string,
    address: string,
    number: string,
    complement: string,
    city: string,
    state: string,
    zipcode: string,
    country: string
  ): Address {
    return Address.createAddress({
      userId,
      address,
      number,
      complement,
      city,
      state,
      zipcode,
      country,
    });
  }
}
