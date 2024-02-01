const batchService = require("./batchService");

async function createBatch(req, res) {
  const { batchNumber, expiresAt, quantity, MedicationId } = req.body;

  if (!batchNumber || !expiresAt || !quantity || !MedicationId) {
    return res.status(400).json({ message: "Missing batch data" });
  }

  try {
    const createdBatch = await batchService.createBatch(req.body);
    res.status(201).json(createdBatch);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getBatchById(req, res) {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "Missing ID" });
  }

  try {
    const batch = await batchService.getBatchById(id);

    if (!batch) {
      return res.status(404).json({ message: "No such batch found" });
    }

    res.status(200).json(batch);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function updateBatch(req, res) {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "Missing ID" });
  }

  try {
    const updatedBatch = await batchService.updateBatch(id, req.body);

    if (!updatedBatch) {
      return res.status(404).json({ message: "No such batch found" });
    }

    res.status(200).json(updatedBatch);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function deleteBatch(req, res) {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: "Missing ID" });
  }

  try {
    await batchService.deleteBatch(id);

    res.status(204).json({ message: `Batch with id ${id} has been deleted`});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

async function getBatches(req, res) {
  const { MedicationId } = req.query;

  try {
    const batches = await batchService.getBatches(MedicationId);
    res.status(200).json(batches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = batchController = { createBatch, getBatchById, updateBatch, deleteBatch, getBatches };