require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connection } = require("./configs/db");

const authController = require("./routes/auth.routes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use("/auth", authController);

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB successfully");
  } catch (error) {
    console.log("Failed to connect to DB :(");
  }
  console.log("> Server is up and running on port : " + PORT);
});
