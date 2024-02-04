const { Sequelize } = require("sequelize");
const defineMedicationModel = require("../medications/medicationModel");
const defineEmissionModel = require("../emissions/emissionModel");
const defineIndicationModel = require("../indications/indicationModel");
const defineBatchModel = require("../batches/batchModel");
const definePatientModel = require("../patients/patientModel");
const definePrescriptionModel = require("../prescriptions/prescriptionModel");
const defineDispensedMedicationModel = require("../dispensedMedications/dispensedMedicationModel");
const associateModels = require("../config/associations");

const dbConfig = {
  HOST: "postgres-db",
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

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: dbConfig.pool
});

const db = {};

db.sequelize = sequelize;
db.medications = defineMedicationModel(sequelize);
db.emissions = defineEmissionModel(sequelize);
db.indications = defineIndicationModel(sequelize);
db.batches = defineBatchModel(sequelize);
db.patients = definePatientModel(sequelize);
db.prescriptions = definePrescriptionModel(sequelize);
db.dispensedMedications = defineDispensedMedicationModel(sequelize);

associateModels(db);

module.exports = db;