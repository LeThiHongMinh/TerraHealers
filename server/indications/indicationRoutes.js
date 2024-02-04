const { Router } = require("express");
const indicationController = require("./indicationController");
const indicationRouter = Router();

indicationRouter.get("/indications", indicationController.getIndications);
indicationRouter.post("/indications", indicationController.createIndication);
indicationRouter.get("/indications/:id", indicationController.getIndicationById);
indicationRouter.patch("/indications/:id", indicationController.updateIndication);
indicationRouter.delete("/indications/:id", indicationController.deleteIndication);

module.exports = indicationRouter;
