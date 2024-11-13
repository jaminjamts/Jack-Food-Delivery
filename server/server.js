import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "dotenv";
config();

const server = express();
server.use(cors());
server.use(bodyParser.json());
const PORT = process.env.DB_URL || 8000;
server.get("/", (_, res) => {
  res.send("delivery backend server is working");
});

server.listen(PORT, () => {
  console.log("working");
});
