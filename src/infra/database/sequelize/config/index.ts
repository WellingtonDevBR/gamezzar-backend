import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "mssql",
  database: "gamezzar",
  username: "admin",
  password: "31051986",
  host: "gamezzardb.cf9phn6m1ojz.us-east-2.rds.amazonaws.com",
  port: 1433,
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