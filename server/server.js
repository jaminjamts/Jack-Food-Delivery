import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "dotenv";
config();

const server = express();
const PORT = 8000 || process.env.DB_URL;
server.use(bodyParser.json());
server.use(cors());
server.get("/", (_, res) => {
  res.send("delivery backend server is working");
});

server.listen(PORT, () => {
  console.log("working");
});
