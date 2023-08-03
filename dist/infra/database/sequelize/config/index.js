"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize({
    dialect: "mssql",
    database: "gamezzar",
    username: "admin",
    password: "31051986",
    host: "gamezzardb.cf9phn6m1ojz.us-east-2.rds.amazonaws.com",
    port: 1433,
    logging: true,
    define: {
        freezeTableName: true,
    },
    dialectOptions: {
        options: {
            encrypt: true,
            trustServerCertificate: true,
        },
    },
});
//# sourceMappingURL=index.js.map