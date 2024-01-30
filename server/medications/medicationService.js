import { db } from "../config/db";
import { Op, literal } from "sequelize";

const Medication = db.medications;
const Batch = db.batches;

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

// find all by name and filter criteria, with sorting option, and additionally counting quantity from batches
async function searchAndPaginateMedications(searchQuery, searchBy, sortBy = "name", order = "ASC", limit = 10, page = 1) {
  // validate params, actual query can go into repository
  const offset = (page - 1) * limit;
  const medications = await Medication.findAll({
    where: {
      [searchBy]: {
        [Op.iLike]: `%${searchQuery}%`
      }
    },
    order: [[sortBy, order]],
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

export { createMedication, getMedicationById, updateMedicationById, deleteMedicationById, searchAndPaginateMedications };
