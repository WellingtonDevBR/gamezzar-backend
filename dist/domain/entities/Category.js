"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const entity_1 = require("../../@seedowrk/domain/entity");
class Category extends entity_1.Entity {
    constructor(props, id) {
        super(props, id);
    }
    static createCategory(props, id) {
        const category = new Category(props, id);
        return category;
    }
}
exports.Category = Category;
//# sourceMappingURL=Category.js.map