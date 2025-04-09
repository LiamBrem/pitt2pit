import express from "express";
import cors from "cors";

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/notes", async (req, res) => {
  res.json({ message: "success!" });
});

app.listen(port, () => {
  console.log("server running on localhost:3000");
});