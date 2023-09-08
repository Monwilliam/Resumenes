const { Schema, model } = require("mongoose");

const ResumeSchema = new Schema({
  Name: String,
  Title: String,
  Contact: {
    tel: Number,
    address: String,
    email: String,
  },
  Skills: {
    type: [String],
  },
  Summary: String,
  Education: [
    {
      school: String,
      startdate: Number,
      enddate: Number,
      details: String,
    },
  ],
  Experiences: [
    {
      position: String,
      compname: String,
      startdate: Number,
      enddate: Number,
      details: String,
    },
  ],
  owner: String,
});

const Resume = model("Resume", ResumeSchema);
module.exports = { Resume };