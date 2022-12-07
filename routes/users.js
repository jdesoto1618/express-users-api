import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

const users = [];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const newUser = req.body;
  users.push({ id: uuidv4(), ...newUser });
  res.send(`User ${newUser.firstName} was successfully added!`);
});

export default router;
