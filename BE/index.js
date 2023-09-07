const express = require('express')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRouter = require("./Routes/auth.route.js");
const authMiddleware = require("./MiddleWares/auth.middleware.js");
const userRouter = require("./Routes/user.route.js");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("Database is connected"))
  .catch((err) => {
    if (err) return console.error(err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRouter);
app.use("/user", authMiddleware, userRouter);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(PORT, (err) => {
  if (err) return console.error(err);
  console.log(`Server started listening at port ${PORT}`);
});