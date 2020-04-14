const WebSocket = require("ws");
const CLOSE_NORMAL = 1000;

const ClientB = () => {
  const ws = new WebSocket("ws://localhost:9898");
  const issuerId = Math.floor(Math.random() * 1000);

  ws.on("open", () => {
    ws.send(JSON.stringify({ issuerId, sendData: true }));
  });

  ws.on("message", (data) => {
    const dataJSON = JSON.parse(data);
    console.log("Payment object:", dataJSON);
    ws.close(CLOSE_NORMAL);
  });
};

module.exports = ClientB;
