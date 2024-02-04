const emissionService = require("./emissionService");

async function createEmission(req, res) {
  const { disposalType, productionEmissions, disposalEmissions, medicationId } = req.body;

  if (!disposalType || !medicationId) {
    return res.status(400).json({ message: "Missing emission data" });
  }

  try {
    const createdEmission = await emissionService.createEmission(req.body);
    res.status(201).json(createdEmission);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getEmissionById(req, res) {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "Missing ID" });
  }

  try {
    const emission = await emissionService.getEmissionById(id);

    if (!emission) {
      return res.status(404).json({ message: "No such emission found" });
    }

    res.status(200).json(emission);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function updateEmission(req, res) {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "Missing ID" });
  }

  try {
    const updatedEmission = await emissionService.updateEmission(id, req.body);

    if (!updatedEmission) {
      return res.status(404).json({ message: "No such emission found" });
    }

    res.status(200).json(updatedEmission);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function deleteEmission(req, res) {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "Missing ID" });
  }

  try {
    await emissionService.deleteEmission(id);

    res.status(204).json({ message: `Emission with id ${id} has been deleted`});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getEmissions(req, res) {
  const { medicationId } = req.query;

  try {
    const emissions = await emissionService.getEmissions(medicationId);
    res.status(200).json(emissions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = emissionController = { createEmission, getEmissionById, updateEmission, deleteEmission, getEmissions };