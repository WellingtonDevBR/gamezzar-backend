"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditionFactory = void 0;
const Edition_1 = require("../entities/Edition");
class EditionFactory {
    static create(name) {
        return Edition_1.Edition.createEdition({ name });
    }
}
exports.EditionFactory = EditionFactory;
//# sourceMappingURL=VersionFactory.js.map