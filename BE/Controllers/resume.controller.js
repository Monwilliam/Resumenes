const { Resume } = require("../models/resume.js");
const resumeController = {
  getResume: async (req, res) => {
    const user_resumes = await Resume.find({ owner: req.params.id });
    console.log(user_resumes);
    res.status(200).json(user_resumes);
  },
  postResume: async (req, res) => {
    const userId = req.params.id;
    let resume = new Resume(req.body);
    resume.owner = userId;
    await resume.save();
    console.log(resume);
  },
};
module.exports = resumeController;
