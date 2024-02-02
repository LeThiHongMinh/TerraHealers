const { Router } = require("express");
const patientController = require("./patientController");
const patientRouter = Router();

patientRouter.get("/patients", patientController.getPatients);
patientRouter.post("/patients", patientController.createPatient);
patientRouter.get("/patients/:id", patientController.getPatientById);
patientRouter.patch("/patients/:id", patientController.updatePatient);
patientRouter.delete("/patients/:id", patientController.deletePatient);

module.exports = patientRouter;
