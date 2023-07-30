"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Region = void 0;
const entity_1 = require("../../@seedowrk/domain/entity");
class Region extends entity_1.Entity {
    constructor(props) {
        super(props);
    }
    static createRegion(props) {
        const genre = new Region(props);
        return genre;
    }
}
exports.Region = Region;
//# sourceMappingURL=Region.js.map