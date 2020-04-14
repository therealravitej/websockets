const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 9898 });

wss.on("connection", (ws) => {
  let issuerId = 0;
  ws.on("message", function incoming(message) {
    console.log("received: %s", message);
    
    const messageJSON = JSON.parse(message);
    issuerId = messageJSON.issuerId;
    if (messageJSON.sendData) {
      setTimeout(() => {
        ws.send(
          JSON.stringify({
            issuerId,
            success: true,
            message: "Repayment successful",
          })
        );
      }, 2000);
    }
  });

  ws.on("close", () => {
    console.log("Client with issuer id", issuerId, "is closing connection");
  });
});
