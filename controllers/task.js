const Task = require("../models/task");

exports.createTask = (req, res, next) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   const error = new Error('Validation failed, entered data is incorrect.');
  //   error.statusCode = 422;
  //   throw error;
  // }

  const title = req.body.title;
  const description = req.body.description;
  const targetDate = req.body.targetDate;
  const targetTime = req.body.targetTime;
  const priorityType = req.body.priorityType;

  const task = new Task({
    title: title,
    description: description,
    targetDate: targetDate,
    targetTime: targetTime,
    priorityType: priorityType,
  });
  task
    .save()
    .then(() => {
      res.status(201).json({
        message: "Post created successfully!",
        task: task,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getTasks = (req, res, next) => {
  Task.find()
    .then((tasks) => {
      res
        .status(200)
        .json({ message: "Fetched tasks successfully.", tasks: tasks });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getTask = (req, res, next) => {
  const taskId = req.query.taskId;
  Task.findById(taskId)
    .then((task) => {
      if (!task) {
        const error = new Error("Could not find post.");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: "Task fetched.", task: task });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.updateTask = (req, res, next) => {
  const taskId = req.query.taskId;
  const title = req.body.title;
  const description = req.body.description;
  const targetDate = req.body.targetDate;
  const targetTime = req.body.targetTime;
  const priorityType = req.body.priorityType;

  Task.findById(taskId)
    .then((task) => {
      if (!task) {
        const error = new Error("Could not find task.");
        error.statusCode = 404;
        throw error;
      }

      task.title = title;
      task.description = description;
      task.targetDate = targetDate;
      task.targetTime = targetTime;
      task.priorityType = priorityType;
      return task.save();
    })
    .then((result) => {
      res.status(200).json({ message: "Task updated!", task: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deleteTask = (req, res, next) => {
  const taskId = req.query.taskId;
  Task.findById(taskId)
    .then((task) => {
      if (!task) {
        const error = new Error("Could not find post.");
        error.statusCode = 404;
        throw error;
      }
      return Task.findByIdAndRemove(taskId);
    })
    .then((result) => {
      res.status(200).json({ message: "Task deleted." });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
