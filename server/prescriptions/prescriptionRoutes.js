const { Router } = require("express");
const prescriptionController = require("./prescriptionController");
const prescriptionRouter = Router();

prescriptionRouter.get("/prescriptions", prescriptionController.getPrescriptions);
// accepts array of prescription (bulk create)
prescriptionRouter.post("/prescriptions", prescriptionController.createPrescriptions);
prescriptionRouter.get("/prescriptions/:id", prescriptionController.getPrescriptionById);
prescriptionRouter.patch("/prescriptions/:id", prescriptionController.updatePrescription);
prescriptionRouter.delete("/prescriptions/:id", prescriptionController.deletePrescription);

module.exports = prescriptionRouter;
