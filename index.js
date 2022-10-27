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

// api for loading all courses
app.get("/courses", (req, res) => {
  res.send(courses);
});

// api for select courses in one categories
// this is for showing categories with id
app.get("/category/:id", (req, res) => {
    const id = req.params.id;
    if (id == "08") {
      res.send(courses);
    } else {
      const selectCategory = courses.filter((n) => n.category_id === id);
      res.send(selectCategory);
    }
  });