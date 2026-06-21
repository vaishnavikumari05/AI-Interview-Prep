const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const questions = {
  "Frontend Developer": [
    "What is React?",
    "What is Virtual DOM?",
    "Explain CSS Flexbox."
  ],

  "Backend Developer": [
    "What is Node.js?",
    "What is Express?",
    "What is REST API?"
  ],

  "Full Stack Developer": [
    "Explain MERN Stack.",
    "What is JWT Authentication?",
    "How does Client-Server Architecture work?"
  ],

  "Python Developer": [
    "What are Python decorators?",
    "Difference between List and Tuple?",
    "What is Pandas?",
    "What is NumPy?",
    "What is Lambda Function?"
  ]
};

app.get("/question/:role", (req, res) => {
  const role = req.params.role;

  const roleQuestions = questions[role];

  if (!roleQuestions) {
    return res.json({
      role: role,
      question: "No questions found"
    });
  }

  const randomQuestion =
    roleQuestions[Math.floor(Math.random() * roleQuestions.length)];

  res.json({
    role: role,
    question: randomQuestion
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});