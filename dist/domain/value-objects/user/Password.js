"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Password = void 0;
class Password {
    constructor(value) {
        if (!value || value.length < 6) {
            throw new Error("Password must be at least 6 characters long.");
        }
        this.value = value;
    }
}
exports.Password = Password;
//# sourceMappingURL=Password.js.map