const indicationService = require("./indicationService");

async function createIndication(req, res) {
  const { description, medicationId } = req.body;

  if (!description || !medicationId) {
    return res.status(400).json({ message: "Missing indication data" });
  }

  try {
    const createdIndication = await indicationService.createIndication(req.body);
    res.status(201).json(createdIndication);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getIndicationById(req, res) {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "Missing ID" });
  }

  try {
    const indication = await indicationService.getIndicationById(id);

    if (!indication) {
      return res.status(404).json({ message: "No such indication found" });
    }

    res.status(200).json(indication);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function updateIndication(req, res) {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "Missing ID" });
  }

  try {
    const updatedIndication = await indicationService.updateIndication(id, req.body);

    if (!updatedIndication) {
      return res.status(404).json({ message: "No such indication found" });
    }

    res.status(200).json(updatedIndication);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function deleteIndication(req, res) {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "Missing ID" });
  }

  try {
    await indicationService.deleteIndication(id);

    res.status(204).json({ message: `Indication with id ${id} has been deleted`});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getIndications(req, res) {
  const { medicationId } = req.query;

  try {
    const indications = await indicationService.getIndications(medicationId);
    res.status(200).json(indications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = indicationController = { createIndication, getIndicationById, updateIndication, deleteIndication, getIndications };
