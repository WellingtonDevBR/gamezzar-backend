"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryFactory = void 0;
const Category_1 = require("../entities/Category");
class CategoryFactory {
    static create(name, status) {
        return Category_1.Category.createCategory({
            name,
            status,
        });
    }
}
exports.CategoryFactory = CategoryFactory;
//# sourceMappingURL=CategoryFactory.js.map