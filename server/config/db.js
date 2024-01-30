import { Sequelize } from "sequelize";
import defineMedicationModel from "../medications/medicationModel";
import defineEmissionModel from "../emissions/emissionModel";
import defineIndicationModel from "../indications/indicationModel";
import defineBatchModel from "../batches/batchModel";
import definePatientModel from "../patients/patientModel";
import definePrescriptionModel from "../prescriptions/prescriptionModel";
import defineDispensedMedicationModel from "../dispensedMedications/dispensedMedicationModel";
import associateModels from "../config/associations";

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

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: dbConfig.pool
});

export const db = {};

db.sequelize = sequelize;
db.medications = defineMedicationModel(sequelize);
db.emissions = defineEmissionModel(sequelize);
db.indications = defineIndicationModel(sequelize);
db.batches = defineBatchModel(sequelize);
db.patients = definePatientModel(sequelize);
db.prescriptions = definePrescriptionModel(sequelize);
db.dispensedMedications = defineDispensedMedicationModel(sequelize);

associateModels(db);
