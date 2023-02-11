const Reminder = require("../models/reminder");

exports.createReminder = (req, res, next) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   const error = new Error('Validation failed, entered data is incorrect.');
  //   error.statusCode = 422;
  //   throw error;
  // }

  const {
    title,
    message,
    targetDate,
    targetTime,
    phoneNumber,
    selectedOption,
  } = req.body;

  const reminder = new Reminder({
    title,
    message,
    targetDate,
    targetTime,
    phoneNumber,
    selectedOption,
  });
  reminder
    .save()
    .then(() => {
      res.status(201).json({
        message: "Post created successfully!",
        reminder: reminder,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getReminders = (req, res, next) => {
  Reminder.find()
    .then((reminders) => {
      res.status(200).json({
        message: "Fetched reminders successfully.",
        reminders: reminders,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getReminder = (req, res, next) => {
  const reminderId = req.query.reminderId;
  Reminder.findById(reminderId)
    .then((reminder) => {
      if (!reminder) {
        const error = new Error("Could not find reminder.");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({
        message: "Fetched reminder successfully.",
        reminder: reminder,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.updateReminder = (req, res, next) => {
  const reminderId = req.query.reminderId;
  const {
    title,
    message,
    targetDate,
    targetTime,
    phoneNumber,
    selectedOption,
  } = req.body;

  Reminder.findById(reminderId)
    .then((reminder) => {
      if (!reminder) {
        const error = new Error("Could not find reminder.");
        error.statusCode = 404;
        throw error;
      }

      reminder.title = title;
      reminder.message = message;
      reminder.targetDate = targetDate;
      reminder.targetTime = targetTime;
      reminder.phoneNumber = phoneNumber;
      reminder.selectedOption = selectedOption;
      return reminder.save();
    })
    .then((result) => {
      res.status(200).json({ message: "Task updated!", reminder: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deleteReminder = (req, res, next) => {
  const reminderId = req.query.reminderId;
  Reminder.findById(reminderId)
    .then((reminder) => {
      if (!reminder) {
        const error = new Error("Could not find post.");
        error.statusCode = 404;
        throw error;
      }
      return Reminder.findByIdAndRemove(reminderId);
    })
    .then((result) => {
      res.status(200).json({ message: "Reminder deleted." });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
