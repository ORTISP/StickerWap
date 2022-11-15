import express from "express";

import auth from "../middleware/auth";
const Album = require("../models/album");
const router = express.Router();

// Get stickers from album
router.get("/", auth, async (req: any, res) => {
  try {
    const album = await Album.findOne({ name: "Qatar" });
    res.send({ album });
  } catch (e) {
    res.status(500).send();
  }
});

export default router;
