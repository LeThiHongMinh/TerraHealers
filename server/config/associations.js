function associateMedicationModel(db) {
  const { medications, emissions, indications, batches, dispensedMedications, prescriptions } = db;

  medications.hasMany(emissions, { foreignKey: 'medicationId' });
  medications.hasMany(batches, { foreignKey: 'medicationId' });
  medications.hasMany(dispensedMedications, { foreignKey: 'medicationId' });
  medications.hasMany(prescriptions, { foreignKey: 'medicationId' });
  medications.belongsToMany(indications, {
    through: 'MedicationIndications',
    foreignKey: 'medicationId'
  });
};

function associateIndicationModel(db) {
  const { indications, medications } = db;

  indications.belongsToMany(medications, {
    through: 'MedicationIndications',
    foreignKey: 'indicationId'
  });
};

function associateEmissionModel(db) {
  const { emissions, medications } = db;

  emissions.belongsTo(medications, { foreignKey: 'medicationId' });
};

function associateBatchModel(db) {
  const { batches, medications, dispensedMedications } = db;

  batches.belongsTo(medications, { foreignKey: 'medicationId' });
  batches.hasMany(dispensedMedications, { foreignKey: 'batchNumber' });
};

function associateDispensedMedicationModel(db) {
  const { dispensedMedications, medications, batches, prescriptions } = db;

  dispensedMedications.belongsTo(medications, { foreignKey: 'medicationId' });
  dispensedMedications.belongsTo(batches, { foreignKey: 'batchNumber' });
  dispensedMedications.belongsTo(prescriptions, { foreignKey: 'prescriptionId' });
};

function associatePrescriptionModel(db) {
  const { prescriptions, dispensedMedications, medications, patients } = db;

  prescriptions.hasMany(dispensedMedications, { foreignKey: 'prescriptionId' });
  prescriptions.belongsTo(medications, { foreignKey: 'medicationId' });
  prescriptions.belongsTo(patients, { foreignKey: 'patientId' });
};

function associatePatientModel(db) {
  const { patients, prescriptions } = db;
  
  patients.hasMany(prescriptions, { foreignKey: 'patientId' });
};

function associateModels(db) {
  associateMedicationModel(db);
  associatePatientModel(db);
  associateIndicationModel(db);
  associateBatchModel(db);
  associateEmissionModel(db);
  associatePrescriptionModel(db);
  associateDispensedMedicationModel(db);
};

module.exports = associateModels;
