const { Router } = require("express");
const coverController = require("../Controllers/cover.controller.js");

const coverRouter = Router();
coverRouter.get("/get/:id", coverController.getCover);
coverRouter.post("/post/:id", coverController.postCover);

module.exports = coverRouter;
