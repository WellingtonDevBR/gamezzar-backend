"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlServerAddressRepository = void 0;
const Address_1 = require("../../models/Address");
class SqlServerAddressRepository {
    async create(address) {
        const addressInfo = address.getAllAddressInformation();
        return await Address_1.AddressModel.findOne({
            where: {
                UserID: addressInfo.userId,
            },
        }).then(function (obj) {
            if (obj)
                return obj.update({
                    Address: addressInfo.address,
                    Country: addressInfo.country,
                }, {
                    where: {
                        UserID: addressInfo.userId,
                    },
                });
            return Address_1.AddressModel.create({
                AddressId: address.getId(),
                UserId: addressInfo.userId,
                Address: addressInfo.address,
                Country: addressInfo.country,
            });
        });
    }
    update(address) {
        throw new Error("Method not implemented.");
    }
    delete(addressId) {
        throw new Error("Method not implemented.");
    }
    getById(addressId) {
        throw new Error("Method not implemented.");
    }
    getByUserId(userId) {
        throw new Error("Method not implemented.");
    }
}
exports.SqlServerAddressRepository = SqlServerAddressRepository;
//# sourceMappingURL=SqlServerAddressRepository.js.map