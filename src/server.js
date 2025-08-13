import express from "express";
import cors from "cors";
import { Server } from "socket.io";
import http from "http";
import dotenv from "dotenv";
import { endpoints } from "./routes/endpoints.js";
import { socket } from "./sockets/socket.js";

dotenv.config();

export const readyConn = new Map();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

const app = express();
app.use(cors(corsOptions));

endpoints(app);

const port = process.env.PORT || 2100;

const server = http.createServer(app);
const io = new Server(server, { cors: corsOptions });
socket(io);

server.listen(port, () => console.log(`Port ${port} is now active!`));
