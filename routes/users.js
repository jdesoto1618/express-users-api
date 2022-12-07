import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("You reached the users route!");
});

export default router;
