import express from "express";
const router = express.Router();

const users = [
  {
    firstName: "Johnny",
    lastName: "Doe",
    Email: "johnd@email.com",
    Age: "25",
  },
  {
    firstName: "Jane",
    lastName: "Does",
    Email: "jane@email.com",
    Age: "22",
  },
];

router.get("/", (req, res) => {
  console.log(users);
  res.send("Users route!");
});

export default router;
