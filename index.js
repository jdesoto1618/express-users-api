import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
const PORT = process.env.port || 5000;

const app = express();

app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("Hello from express!");
});

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
