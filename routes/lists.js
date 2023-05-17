const router = require("express").Router();
const List = require("../models/list");
const CryptoJS = require("crypto-js");
const verify = require("../verifyToken");

//CREATE
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);
    try {
      const savedList = await newList.save();
      res.status(200).json(savedList);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("MOVIE CREATE you are not allowed");
  }
});

module.exports = router;
