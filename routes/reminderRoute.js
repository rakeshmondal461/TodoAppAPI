const express = require("express");
const router = express.Router();
const reminderController = require("../controllers/reminder");

// define the home page route
router.get("/getReminders", reminderController.getReminders);
// define the about route
router.post("/createReminder", reminderController.createReminder);
router.get("/getReminder", reminderController.getReminder);
router.put("/updateReminder", reminderController.updateReminder);
router.delete("/deleteReminder", reminderController.deleteReminder);
module.exports = router;
