const db = require("../config/db");

const Indication = db.indications;

async function createIndication(indicationData) {
  const indication = await Indication.create(indicationData);
  return indication;
}

async function getIndicationById(indicationId) {
  const indication = await Indication.findByPk(indicationId);
  return indication;
}

async function updateIndication(indicationId, updatedIndicationData) {
  const result = await Indication.update(updatedIndicationData, {
    where: { id: indicationId },
    returning: true,
  });
  
  return result[1][0];
}

async function deleteIndication(indicationId) {
  await Indication.destroy({
    where: { indicationId: indicationId }
  });
}

async function getIndications(medicationId) {
  const indications = await Indication.findAll({
    where: medicationId ? { medicationId: medicationId } : {},
  });

  return indications;
}

module.exports = indicationService = { createIndication, getIndicationById, updateIndication, deleteIndication, getIndications };
