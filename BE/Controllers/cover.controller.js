const { Cover } = require("../models/cover.js");
const coverController = {
  getCover: async (req, res) => {
    const user_covers = await Cover.find({ owner: req.params.id });
    console.log(user_covers);
    res.status(200).json(user_covers);
  },
  postCover: async (req, res) => {
    const userId = req.params.id;
    let cover = new Cover(req.body);
    cover.owner = userId;
    await cover.save();
    console.log(cover);
  },
};
module.exports = coverController;
