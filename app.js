const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 3030;

const taskRoute = require("./routes/taskRoute");
const reminderRoute = require("./routes/reminderRoute");

const MONGODB_URI =
  "mongodb+srv://rakeshmondal:wzF1ATqV7y5r5Ijo@cluster0.rv3djdk.mongodb.net/todoAppAPI?retryWrites=true&w=majority";

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
