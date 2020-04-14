const ClientA = require("./clientA");
const ClientB = require("./clientB");

const Clients = () => {
  setInterval(() => {
    ClientA();
    ClientB();
  }, 4000);
};

module.exports = Clients();
