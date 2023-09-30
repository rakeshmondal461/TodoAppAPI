const express = require("express");
const app = express();
const rateLimit = require("express-rate-limit");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { swaggerUi, swaggerSpec } = require("./swagger");
const port = 3030;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 20, // 100 requests per minute
  message: "Too many requests from this IP, please try again later.",
});

//app.use(limiter);

const taskRoute = require("./routes/taskRoute");
const reminderRoute = require("./routes/reminderRoute");

const MONGODB_URI =
  "mongodb://localhost:27017/todoApp?retryWrites=true&w=majority";

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use("/task", taskRoute);
app.use("/reminder", reminderRoute);

mongoose.set("strictQuery", false);
mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(port);
  })
  .catch((err) => console.log(err));
