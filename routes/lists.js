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

//DELETE
router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(200).json("LIST deleted successfuly");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("MOVIE CREATE you are not allowed");
  }
});

//GET
router.get("/:id", verify, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];
  if (req.user.isAdmin) {
    try {
      if (typeQuery) {
        if (genreQuery) {
          list = await List.aggregate([
            { $sample: { size: 10 } },
            { $match: { type: typeQuery, genre: genreQuery } },
          ]);
        } else {
          list = await List.aggregate([
            { $sample: { size: 10 } },
            { $match: { type: typeQuery } },
          ]);
        }
      } else {
        list = await List.aggregate([{ $sample: { size: 10 } }]);
      }
      
      res.status(200).json(list);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("MOVIE GET you are not allowed");
  }
});

module.exports = router;
