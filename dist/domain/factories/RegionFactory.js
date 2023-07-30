"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionFactory = void 0;
const Region_1 = require("../entities/Region");
class RegionFactory {
    static create(name, status) {
        return Region_1.Region.createRegion({ name, status });
    }
}
exports.RegionFactory = RegionFactory;
//# sourceMappingURL=RegionFactory.js.map