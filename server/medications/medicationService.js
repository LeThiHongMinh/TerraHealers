import { db } from "../config/db";
import { literal } from "sequelize";

const Medication = db.medications;

async function createMedication(medicationData) {
  const medication = await Medication.create(medicationData);
  return medication;
}

async function getMedicationById(medicationId) {
  const medication = await Medication.findByPk(medicationId);
  return medication;
};

async function updateMedicationById(medicationId, updatedMedicationData) {
  const medication = await Medication.update(updatedMedicationData, {
    where: { id: medicationId }
  });
  
  return medication;
}

async function deleteMedicationById(medicationId) {
  await Medication.destroy({
    where: {
      id: medicationId
    }
  });
}

async function getPaginatedMedications(limit = 10, page = 1) {
  // validate params, actual query can go into repository
  const offset = (page - 1) * limit;
  const medications = await Medication.findAll({
    order: [[sortBy, 'ASC']],
    limit,
    offset,
    attributes: [
      'id',
      'name',
      'dose',
      'supplier',
      'unit_selling_price',
      [literal('(SELECT SUM("quantity") FROM "Batch" WHERE "medicationId" = "Medication"."id")'), 'totalQuantity']
    ]
  });

  return medications;
};

export { createMedication, getMedicationById, updateMedicationById, deleteMedicationById, getPaginatedMedications };
