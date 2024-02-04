const db = require("../config/db");

const Batch = db.batches;

async function createBatch(batchData) {
  const batch = await Batch.create(batchData);
  return batch;
}

async function getBatchById(batchId) {
  const batch = await Batch.findByPk(batchId);
  return batch;
}

async function updateBatch(batchId, updatedBatchData) {
  const result = await Batch.update(updatedBatchData, {
    where: { batchNumber: batchId },
    returning: true,
  });
  
  return result[1][0];
}

async function deleteBatch(batchId) {
  await Batch.destroy({
    where: { batchName: batchId }
  });
}

async function getBatches(medicationId) {
  const batches = await Batch.findAll({
    where: medicationId ? { medicationId: medicationId } : {},
    order: [['expiresAt', 'ASC']]
  });

  return batches;
}

module.exports = batchService = { createBatch, getBatchById, updateBatch, deleteBatch, getBatches };
