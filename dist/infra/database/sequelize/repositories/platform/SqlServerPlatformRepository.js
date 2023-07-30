"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlServerPlatformRepository = void 0;
const Platform_1 = require("../../models/Platform");
class SqlServerPlatformRepository {
    async getByName(name) {
        const platform = await Platform_1.PlatformModel.findOne({
            raw: true,
            where: {
                Name: name,
            },
        });
        return platform;
    }
}
exports.SqlServerPlatformRepository = SqlServerPlatformRepository;
//# sourceMappingURL=SqlServerPlatformRepository.js.map