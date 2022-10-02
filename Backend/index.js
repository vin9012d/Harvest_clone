require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connection } = require("./configs/db");

const authController = require("./routes/auth.routes");
const { clientControl } = require("./routes/client.route");
const { timeControl } = require("./routes/time.route");
const { projectControl } = require("./routes/project.route");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use("/auth", authController);
app.use("/client", clientControl)
app.use("/time", timeControl)
app.use("/project",projectControl)

app.get("/", (req, res) => {
  res.send("Welcome to the home pages")
})

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB successfully");
  } catch (error) {
    console.log("Failed to connect to DB :(");
  }
  console.log("> Server is up and running on port : " + PORT);
});
