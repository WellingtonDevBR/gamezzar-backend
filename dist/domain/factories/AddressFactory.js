"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressFactory = void 0;
const Address_1 = require("../entities/Address");
class AddressFactory {
    static create(userId, address, country) {
        return Address_1.Address.createAddress({
            userId,
            address,
            country,
        });
    }
}
exports.AddressFactory = AddressFactory;
//# sourceMappingURL=AddressFactory.js.map