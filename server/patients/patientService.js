const db = require("../config/db");

const Patient = db.patients;

async function createPatient(patientData) {
  const patient = await Patient.create(patientData);
  return patient;
}

async function getPatientById(patientId) {
  const patient = await Patient.findByPk(patientId);
  return patient;
}

async function updatePatient(patientId, updatedPatientData) {
  const result = await Patient.update(updatedPatientData, {
    where: { id: patientId },
    returning: true,
  });
  
  return result[1][0];
}

async function deletePatient(patientId) {
  await Patient.destroy({
    where: { patientId: patientId }
  });
}

async function getPatients() {
  const patients = await Patient.findAll();
  return patients;
}

module.exports = patientService = { createPatient, getPatientById, updatePatient, deletePatient, getPatients };
