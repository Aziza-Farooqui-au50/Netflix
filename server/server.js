const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const db = require('./db.js');
const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json());

db.Database();
app.use("/api/user", userRoutes);

app.listen(5000, () => {
  console.log("server started on port 5000");
});
