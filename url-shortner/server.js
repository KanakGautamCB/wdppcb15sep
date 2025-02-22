const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const urlRoutes = require("./routes/urlRoutes");

const app = express();

dotenv.config()


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/api", urlRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() =>{
    console.log("MongoDB connected")
    app.listen(3000, () => console.log("Server started on http://localhost:3000"));
}).catch((error) => console.error("MongoDB connection error:", error));