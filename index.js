const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

const categories = require("./data/courses.json");
const courses = require("./data/courseName.json");

// api for loading all course categories
app.get("/categories", (req, res) => {
    res.send(categories);
  });
  
