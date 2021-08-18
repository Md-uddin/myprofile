const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/myweb", (req, res) => {
  res.send("this is myweb");
});
router.post("/myweb", async (req, res) => {
  try {
    const { name, email, description } = req.body;

    if (!name || !email) {
      res.status(406).json({ error: "plz fill name and email" });
      console.log(req.body);
      console.log("name and email is not entered");
    } else {
      const user = new User({ name, email, description });
      await user.save();
      res
        .status(200)
        .json({ message: "thanks for registering we will reach you in short" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
