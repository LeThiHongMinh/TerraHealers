const medicationService = require("./medicationService");

async function createMedication(req, res) {
  const { imprint, name, dose, supplier, unitSellingPrice } = req.body;

  if (!imprint || !name || !dose || !supplier || !unitSellingPrice) {
    return res.status(400).json({ message: "Missing medication data" });
  }

  try {
    const createdMedication = await medicationService.createMedication(req.body);
    res.status(201).json(createdMedication);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getMedicationById(req, res) {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "Missing ID" });
  }

  try {
    const medication = await medicationService.getMedicationById(id);

    if (!medication) {
      return res.status(404).json({ message: "No such medication found" });
    }

    res.status(200).json(medication);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function updateMedication(req, res) {
  const id = req.params.id;
  const { imprint, name, dose, supplier, unitSellingPrice } = req.body;

  if (!id) {
    return res.status(400).json({ message: "Missing ID" });
  }

  if (!imprint || !name || !dose || !supplier || !unitSellingPrice) {
    return res.status(400).json({ message: "Missing medication data" });
  }

  try {
    const updatedMedication = await medicationService.updateMedication(id, req.body);

    if (!updatedMedication) {
      return res.status(404).json({ message: "No such medication found" });
    }

    res.status(200).json(updatedMedication);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function deleteMedication(req, res) {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "Missing ID" });
  }

  try {
    await medicationService.deleteMedication(id);

    res.status(204).json({ message: `Medication with id ${id} has been deleted`});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getAllMedications(req, res) {
  try {
    const medications = await medicationService.getAllMedications();
    res.status(200).json(medications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = medicationController = { createMedication, getMedicationById, updateMedication, deleteMedication, getAllMedications };