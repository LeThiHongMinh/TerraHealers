const patientService = require("./patientService");

async function createPatient(req, res) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Missing patient data" });
  }

  try {
    const createdPatient = await patientService.createPatient(req.body);
    res.status(201).json(createdPatient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getPatientById(req, res) {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "Missing ID" });
  }

  try {
    const patient = await patientService.getPatientById(id);

    if (!patient) {
      return res.status(404).json({ message: "No such patient found" });
    }

    res.status(200).json(patient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function updatePatient(req, res) {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "Missing ID" });
  }

  try {
    const updatedPatient = await patientService.updatePatient(id, req.body);

    if (!updatedPatient) {
      return res.status(404).json({ message: "No such patient found" });
    }

    res.status(200).json(updatedPatient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function deletePatient(req, res) {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "Missing ID" });
  }

  try {
    await patientService.deletePatient(id);

    res.status(204).json({ message: `Patient with id ${id} has been deleted`});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getPatients(req, res) {
  try {
    const patients = await patientService.getPatients();
    res.status(200).json(patients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = patientController = { createPatient, getPatientById, updatePatient, deletePatient, getPatients };
