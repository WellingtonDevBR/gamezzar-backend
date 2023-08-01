import { Address } from "../entities/Address";

export interface IAddressRepository {
  create(address: Address): Promise<any>;
  update(address: any): Promise<void>;
  delete(addressId: string): Promise<void>;
  getById(addressId: string): Promise<any>;
  getByUserId(userId: string): Promise<any>;
}
