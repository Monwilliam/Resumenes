const { Schema, model } = require("mongoose");

const ResumeSchema = new Schema({
  Name: String,
  Title: String,
  Experiences: [
    {
      position: String,
      compname: String,
      startdate: Number,
      enddate: Number,
      details: String,
    },
  ],
  Education: [
    {
      school: String,
      startdate: Number,
      enddate: Number,
      details: String,
    },
  ],
  Contact: [
    {
      tel: Number,
      address: String,
      email: String,
    },
  ],
  Summary: String,
  Skills: {
    type: [String],
  },
  owner: String,
});

const Resume = model("Resume", ResumeSchema);
module.exports = { Resume };
