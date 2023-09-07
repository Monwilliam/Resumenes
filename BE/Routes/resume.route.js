const { Router } = require("express");
const resumeController = require("../Controllers/resume.controller.js");

const resumeRouter = Router();
resumeRouter.get("/get/:id", resumeController.getResume);
resumeRouter.post("/post/:id", resumeController.postResume);

module.exports = resumeRouter;
