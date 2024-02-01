const db = require("../config/db");

const Emission = db.emissions;

async function createEmission(emissionData) {
  const emission = await Emission.create(emissionData);
  return emission;
}

async function getEmissionById(emissionId) {
  const emission = await Emission.findByPk(emissionId);
  return emission;
};

async function updateEmission(emissionId, updatedEmissionData) {
  const result = await Emission.update(updatedEmissionData, {
    where: { id: emissionId },
    returning: true,
  });
  
  return result[1][0];
}

async function deleteEmission(emissionId) {
  await Emission.destroy({
    where: {
      id: emissionId
    }
  });
}

async function getEmissions() {
  const emissions = await Emission.findAll({
    order: [['id', 'ASC']]
  });

  return emissions;
}

module.exports = emissionService = { createEmission, getEmissionById, updateEmission, deleteEmission, getEmissions };