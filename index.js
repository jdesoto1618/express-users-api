import express from "express";
import bodyParser from "body-parser";
const PORT = process.env.port || 5000;

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("test response");
  res.send("Hello from express!");
});

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
