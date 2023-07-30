"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Version = void 0;
const entity_1 = require("../../@seedowrk/domain/entity");
class Version extends entity_1.Entity {
    constructor(props) {
        super(props);
    }
    static createVersion(props) {
        const genre = new Version(props);
        return genre;
    }
}
exports.Version = Version;
//# sourceMappingURL=Version.js.map