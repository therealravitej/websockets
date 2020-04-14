const WebSocket = require("ws");
const CLOSE_NORMAL = 1000;

const ClientA = () => {
  const ws = new WebSocket("ws://localhost:9898");
  const issuerId = Math.floor(Math.random() * 1000);

  ws.on("open", function open() {
    ws.send(JSON.stringify({ issuerId, sendData: false }));
  });

  setTimeout(() => {
    console.log("Repayment successful, closing connection.");
    ws.close(CLOSE_NORMAL, JSON.stringify({ issuerId }));
  }, 3000);
};

module.exports = ClientA;
