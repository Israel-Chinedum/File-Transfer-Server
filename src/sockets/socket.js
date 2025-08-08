import { testLogic } from "../services/socket_services/test_logic.js";
import { handleChunk } from "../services/socket_services/handle_chunk.js";
export const socket = (io) => {
  console.log("running");
  io.on("connection", (socket) => {
    console.log("New user connected!");
    socket.on('test', testLogic);
    handleChunk(socket);
  });
};
