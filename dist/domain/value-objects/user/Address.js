"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
class Address {
    constructor(value) {
        if (!value || value.length < 2) {
            throw new Error("Address must be at least 2 characters long.");
        }
        this.value = value;
    }
}
exports.Address = Address;
//# sourceMappingURL=Address.js.map