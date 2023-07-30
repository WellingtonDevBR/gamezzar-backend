"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeWishlistModel = exports.WishlistModel = void 0;
const sequelize_1 = require("sequelize");
class WishlistModel extends sequelize_1.Model {
}
exports.WishlistModel = WishlistModel;
function initializeWishlistModel(sequelize) {
    WishlistModel.init({
        WishlistId: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        UserId: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        GameId: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        InterestLevel: {
            type: sequelize_1.DataTypes.STRING,
        },
    }, {
        tableName: "Wishlist",
        timestamps: true,
        sequelize,
    });
}
exports.initializeWishlistModel = initializeWishlistModel;
//# sourceMappingURL=Wishlist.js.map