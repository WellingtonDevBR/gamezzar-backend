import { Address } from "../../../../../domain/entities/Address";
import { IAddressRepository } from "../../../../../domain/repository/IAddressRepository";
import { AddressModel } from "../../models/Address";

export class SqlServerAddressRepository implements IAddressRepository {
  async create(address: Address): Promise<any> {
    const addressInfo = address.getAllAddressInformation();
    return await AddressModel.findOne({
      where: {
        UserID: addressInfo.userId,
      },
    }).then(function (obj) {
      // update
      if (obj)
        return obj.update(
          {
            Address: addressInfo.address,
            Country: addressInfo.country,
          },
          {
            where: {
              UserID: addressInfo.userId,
            },
          }
        );
      // insert
      return AddressModel.create({
        AddressId: address.getId(),
        UserId: addressInfo.userId,
        Address: addressInfo.address,
        Country: addressInfo.country,
      });
    });
  }
  update(address: any): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(addressId: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getById(addressId: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  getByUserId(userId: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
