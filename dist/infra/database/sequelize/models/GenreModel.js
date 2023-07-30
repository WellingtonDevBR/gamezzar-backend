"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeGenreModel = exports.GenreModel = void 0;
const sequelize_1 = require("sequelize");
class GenreModel extends sequelize_1.Model {
}
exports.GenreModel = GenreModel;
function initializeGenreModel(sequelize) {
    GenreModel.init({
        GenreId: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            primaryKey: true,
        },
        Name: {
            type: new sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
    }, {
        tableName: "Genre",
        timestamps: true,
        sequelize,
    });
}
exports.initializeGenreModel = initializeGenreModel;
//# sourceMappingURL=GenreModel.js.map