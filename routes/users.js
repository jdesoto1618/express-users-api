import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

let users = [];

router.get("/", (req, res) => {
  res.send(users);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => {
    user.id !== id;
  });

  res.send(`User with the id ${id} deleted successfully.`);
});

router.post("/", (req, res) => {
  const newUser = req.body;
  users.push({ id: uuidv4(), ...newUser });
  res.send(`User ${newUser.firstName} was successfully added!`);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, age } = req.body;
  const userToUpdate = users.find((user) => user.id === id);

  if (firstName) {
    userToUpdate.firstName = firstName;
  }
  if (lastName) {
    userToUpdate.lastName = lastName;
  }
  if (email) {
    userToUpdate.email = email;
  }
  if (age) {
    userToUpdate.age = age;
  }

  res.send(`User with the id ${id} has been updated!`);
});

export default router;
