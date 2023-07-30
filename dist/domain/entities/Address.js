"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const entity_1 = require("../../@seedowrk/domain/entity");
class Address extends entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    static createAddress(props, id) {
        const user = new Address(props, id);
        return user;
    }
}
exports.Address = Address;
//# sourceMappingURL=Address.js.map