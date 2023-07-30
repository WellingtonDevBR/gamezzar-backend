"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlServerRegionRepository = void 0;
const Region_1 = require("../../models/Region");
class SqlServerRegionRepository {
    async getByName(name) {
        const region = await Region_1.RegionModel.findOne({
            raw: true,
            where: {
                Name: name,
            },
        });
        return region;
    }
}
exports.SqlServerRegionRepository = SqlServerRegionRepository;
//# sourceMappingURL=SqlServerRegionRepository.js.map