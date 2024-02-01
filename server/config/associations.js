function associateMedicationModel(db) {
  const { medications, emissions, indications, batches, dispensedMedications, prescriptions } = db;

  medications.hasMany(emissions);
  medications.hasMany(batches);
  medications.hasMany(dispensedMedications);
  medications.hasMany(prescriptions);
  medications.belongsToMany(indications, {
    through: 'MedicationIndications'
  });
};

function associateIndicationModel(db) {
  const { indications, medications } = db;

  indications.belongsToMany(medications, {
    through: 'MedicationIndications'
  });
};

function associateEmissionModel(db) {
  const { emissions, medications } = db;

  emissions.belongsTo(medications);
};

function associateBatchModel(db) {
  const { batches, medications, dispensedMedications } = db;

  batches.belongsTo(medications);
  batches.hasMany(dispensedMedications);
};

function associateDispensedMedicationModel(db) {
  const { dispensedMedications, medications, batches, prescriptions } = db;

  dispensedMedications.belongsTo(medications);
  dispensedMedications.belongsTo(batches);
  dispensedMedications.belongsTo(prescriptions);
};

function associatePrescriptionModel(db) {
  const { prescriptions, dispensedMedications, medications, patients } = db;

  prescriptions.hasMany(dispensedMedications);
  prescriptions.belongsTo(medications);
  prescriptions.belongsTo(patients);
};

function associatePatientModel(db) {
  const { patients, prescriptions } = db;
  
  patients.hasMany(prescriptions);
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
