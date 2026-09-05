const mongoose = require("mongoose");
const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);
async function main() {
  try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  }
  catch(err){
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the process with an error code
  }
  
}

module.exports = main;
