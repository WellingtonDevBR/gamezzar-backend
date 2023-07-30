"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlServerEditionRepository = void 0;
const Edition_1 = require("../../models/Edition");
class SqlServerEditionRepository {
    async getByName(name) {
        return await Edition_1.EditionModel.findOne({
            where: {
                Name: name,
            },
        });
    }
}
exports.SqlServerEditionRepository = SqlServerEditionRepository;
//# sourceMappingURL=SqlServerEditionRepository.js.map