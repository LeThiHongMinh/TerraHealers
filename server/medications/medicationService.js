const db = require("../config/db");
const { literal } = require("sequelize");

const Medication = db.medications;

async function createMedication(medicationData) {
  const medication = await Medication.create(medicationData);
  return medication;
}

async function getMedicationById(medicationId) {
  const medication = await Medication.findByPk(medicationId);
  return medication;
};

async function updateMedication(medicationId, updatedMedicationData) {
  const result = await Medication.update(updatedMedicationData, {
    where: { id: medicationId },
    returning: true,
  });
  
  return result[1][0];
}

async function deleteMedication(medicationId) {
  await Medication.destroy({
    where: {
      id: medicationId
    }
  });
}

// async function getPaginatedMedications(limit = 10, page = 1) {
//   const offset = (page - 1) * limit;
//   const medications = await Medication.findAll({
//     order: [[sortBy, 'ASC']],
//     limit,
//     offset,
//     attributes: [
//       'id',
//       'name',
//       'dose',
//       'supplier',
//       'unit_selling_price',
//       [literal('(SELECT SUM("quantity") FROM "Batch" WHERE "medicationId" = "Medication"."id")'), 'totalQuantity']
//     ]
//   });

//   return medications;
// };

async function getAllMedications() {
  const medications = await Medication.findAll({
    order: [['name', 'ASC']],
    attributes: [
      'id',
      'name',
      'dose',
      'supplier',
      'unitSellingPrice',
      [literal('(SELECT COALESCE(SUM("Batches"."quantity"), 0) FROM "Batches" WHERE "Batches"."MedicationId" = "Medication"."id")'),
      'totalQuantity']
    ]
  });

  return medications;
};

module.exports = medicationService = { createMedication, getMedicationById, updateMedication, deleteMedication, getAllMedications };
