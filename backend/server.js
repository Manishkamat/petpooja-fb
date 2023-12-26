import express from "express";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/mydb")
  .then(() => console.log("database connected"))
  .catch(() => console.log("error"));

const app = express();

app.get("/", (req, res) => res.send("API is working..."));

app.post("/", (req, res) => {
  res.send(req.body);
});

app.listen(5000, console.log("server is running on port 5000"));
