const { Router } = require("express");
const batchController = require("./batchController");
const batchRouter = Router();

batchRouter.get("/batches", batchController.getBatches);
batchRouter.post("/batches", batchController.createBatch);
batchRouter.get("/batches/:id", batchController.getBatchById);
batchRouter.patch("/batches/:id", batchController.updateBatch);
batchRouter.delete("/batches/:id", batchController.deleteBatch);

module.exports = batchRouter;

// {
//   "imprint": "SIN13669P",   
//   "name": "Etoricoxib (Arcoxia) Tablet",
//   "dose": "120 MG",
//   "supplier": "ORGANON SINGAPORE PTE. LTD.",
//   "unitSellingPrice": 1.65
// }

// {
//   "batchNumber": "A349X247",   
//   "expiresAt": "2024-02-01T12:47:00.686Z",
//   "quantity": "58",
//   "MedicationId": 1
// }