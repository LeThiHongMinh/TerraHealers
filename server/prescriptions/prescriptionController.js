const prescriptionService = require("./prescriptionService");

async function createPrescriptions(req, res) {
  const prescriptionsData = req.body;

  if (prescriptionsData.length === 0) {
    return res.status(400).json({ message: "Missing prescription data" });
  }

  prescriptionsData.forEach((prescriptionData) => {
    // optional price
    const { quantity, medicationId } = prescriptionData;

    if (!quantity || !medicationId) {
      return res.status(400).json({ message: "Missing prescription data" });
    }
  });

  try {
    const createdPrescription = await prescriptionService.createPrescriptions(req.body);
    res.status(201).json(createdPrescription);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getPrescriptionById(req, res) {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "Missing ID" });
  }

  try {
    const prescription = await prescriptionService.getPrescriptionById(id);

    if (!prescription) {
      return res.status(404).json({ message: "No such prescription found" });
    }

    res.status(200).json(prescription);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function updatePrescription(req, res) {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "Missing ID" });
  }

  try {
    const updatedPrescription = await prescriptionService.updatePrescription(id, req.body);

    if (!updatedPrescription) {
      return res.status(404).json({ message: "No such prescription found" });
    }

    res.status(200).json(updatedPrescription);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function deletePrescription(req, res) {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "Missing ID" });
  }

  try {
    await prescriptionService.deletePrescription(id);

    res.status(204).json({ message: `Prescription with id ${id} has been deleted`});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getPrescriptions(req, res) {
  const { groupId } = req.query;

  try {
    const prescriptions = await prescriptionService.getPrescriptions(groupId);
    res.status(200).json(prescriptions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = prescriptionController = { createPrescriptions, getPrescriptionById, updatePrescription, deletePrescription, getPrescriptions };

