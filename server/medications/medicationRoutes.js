const { Router } = require("express");
const medicationController = require("./medicationController");
const medicationRouter = Router();

medicationRouter.get("/medications", medicationController.getAllMedications);
medicationRouter.post("/medications", medicationController.createMedication);
medicationRouter.get("/medications/:id", medicationController.getMedicationById);
medicationRouter.patch("/medications/:id", medicationController.updateMedication);
medicationRouter.delete("/medications/:id", medicationController.deleteMedication);

module.exports = medicationRouter;
