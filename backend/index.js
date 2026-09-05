const express = require("express");
const app = express();
const cors = require("cors");
const main = require("./config/db");
const TaskRoutes = require("./routes/TaskRoutes");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/api", TaskRoutes);

main()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server running on PORT 5000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
