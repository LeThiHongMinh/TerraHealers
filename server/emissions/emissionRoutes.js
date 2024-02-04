const { Router } = require("express");
const emissionController = require("./emissionController");
const emissionRouter = Router();

emissionRouter.get("/emissions", emissionController.getEmissions);
emissionRouter.post("/emissions", emissionController.createEmission);
emissionRouter.get("/emissions/:id", emissionController.getEmissionById);
emissionRouter.patch("/emissions/:id", emissionController.updateEmission);
emissionRouter.delete("/emissions/:id", emissionController.deleteEmission);

module.exports = emissionRouter;
