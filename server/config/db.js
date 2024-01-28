import { Sequelize } from "sequelize";

const dbConfig = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "T3rraHealers",
  DB: "TerraHealers",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

export default db = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: dbConfig.pool
});
