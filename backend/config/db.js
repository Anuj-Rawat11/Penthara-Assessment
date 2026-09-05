const mongoose = require("mongoose");
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);
async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}

module.exports = main;
