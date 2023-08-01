import { Address } from "../entities/Address";

export class AddressFactory {
  static create(userId: string, address: string, country: string): Address {
    return Address.createAddress({
      userId,
      address,
      country,
    });
  }
}
