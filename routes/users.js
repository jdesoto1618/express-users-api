import express from "express";
const router = express.Router();

const users = [
  {
    firstName: "Johnny",
    lastName: "Doe",
    Email: "johnd@email.com",
    Age: 25,
  },
  {
    firstName: "Jane",
    lastName: "Does",
    Email: "jane@email.com",
    Age: 22,
  },
];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const newUser = req.body;
  users.push({ ...newUser });
  res.send(`User ${newUser.firstName} was successfully added!`);
});

export default router;
