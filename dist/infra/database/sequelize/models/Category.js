"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeCategoryModel = exports.CategoryModel = void 0;
const sequelize_1 = require("sequelize");
class CategoryModel extends sequelize_1.Model {
}
exports.CategoryModel = CategoryModel;
function initializeCategoryModel(sequelize) {
    CategoryModel.init({
        CategoryId: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        Name: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
    }, {
        tableName: "Category",
        timestamps: true,
        sequelize,
    });
}
exports.initializeCategoryModel = initializeCategoryModel;
//# sourceMappingURL=Category.js.map