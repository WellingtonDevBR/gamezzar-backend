"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Name = void 0;
class Name {
    constructor(value) {
        if (!value || value.length < 2) {
            throw new Error("Name must be at least 2 characters long.");
        }
        this.value = value;
    }
}
exports.Name = Name;
//# sourceMappingURL=Name.js.map