const express = require("express");
const cors = require("cors");
const bodyParer = require("body-parser");
const userRouter = require("./router/user.router");

const app = express();
app.use(cors());
app.use(bodyParer.urlencoded({ extended: true }));
app.use(bodyParer.json());

// Home route
app.get("/", (req, res) => {
  //   res.statusCode(200);
  res.sendFile(__dirname + "/views/index.html");
});

// ueer router
app.use("/users", userRouter);

// Page not pound
app.use((req, res, next) => {
  res.status(404).json({
    massage: "Page is not found 404!!",
  });
});

// Server is not found
app.use((err, req, res, next) => {
  if (err) {
    console.log(err);
  } else {
    res.status(500).json({
      massage: "Sumthing Borack!!",
    });
  }
});

module.exports = app;
