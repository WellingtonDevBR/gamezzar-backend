"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Username = void 0;
class Username {
    constructor(value) {
        if (!value || value.length < 6) {
            throw new Error("Username must be at least 6 characters long.");
        }
        this.value = value;
    }
}
exports.Username = Username;
//# sourceMappingURL=Username.js.map