export const socket = (io) => {
  console.log("running");
  io.on("connection", (socket) => {
    console.log("New user connected!");
  });
};
