const { Schema, model } = require("mongoose");

const CoverSchema = new Schema({
  Name: String,
  Title: String,
  Contact: {
    tel: Number,
    address: String,
    email: String,
  },
  Employer: [
    {
      name: String,
      title: String,
      address: String,
    },
  ],
  Para1: String,
  Para2: String,
  owner: String,
});

const Cover = model("Cover", CoverSchema);
module.exports = { Cover };