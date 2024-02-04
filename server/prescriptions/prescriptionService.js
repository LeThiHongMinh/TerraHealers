const db = require("../config/db");
const medicationService = require("../medications/medicationService");

const Prescription = db.prescriptions;

async function createPrescriptions(prescriptionsData) {
  // handle group id generation
  const maxGroupId = await Prescription.max('groupId');
  const newGroupId =  maxGroupId !== null ? maxGroupId + 1 : 1;

  // assign group id and price
  prescriptionsData.forEach(async (prescriptionData) => {
    prescriptionData.groupId = newGroupId; 

    if (!prescriptionData.price) {
      const { quantity, medicationId } = prescriptionData;

      prescriptionData.price = await medicationService.calculateMedicationSellingPrice(quantity, medicationId);
    }
  })

  const prescriptions = await Prescription.bulkCreate(prescriptionsData, { validate: true });
  return prescriptions;
}

async function getPrescriptionById(prescriptionId) {
  const prescription = await Prescription.findByPk(prescriptionId);
  return prescription;
}

async function updatePrescription(prescriptionId, updatedPrescriptionData) {
  const result = await Prescription.update(updatedPrescriptionData, {
    where: { id: prescriptionId },
    returning: true,
  });
  
  return result[1][0];
}

async function deletePrescription(prescriptionId) {
  await Prescription.destroy({
    where: { prescriptionId: prescriptionId }
  });
}

// allow filtering by group id for bill generator
async function getPrescriptions(groupId) {
  const prescriptions = await Prescription.findAll({
    where: groupId ? { groupId: groupId } : {},
  });

  return prescriptions;
}

module.exports = prescriptionService = { createPrescriptions, getPrescriptionById, updatePrescription, deletePrescription, getPrescriptions };
