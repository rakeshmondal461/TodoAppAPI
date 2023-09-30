/**
 * @swagger
 * tags:
 *   name: Reminders
 *   description: API operations related to reminders
 */

/**
 * @swagger
 * /reminder/getReminders:
 *   get:
 *     tags: [Reminders]
 *     summary: Get a list of reminders.
 *     description: Retrieve a list of reminders.
 *     responses:
 *       200:
 *         description: A list of reminders.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /reminder/getReminder:
 *   get:
 *     tags: [Reminders]
 *     summary: Get a reminder by ID
 *     description: Retrieve a reminder using its unique identifier.
 *     parameters:
 *       - in: query
 *         name: reminderId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the reminder to retrieve.
 *     responses:
 *       200:
 *         description: Reminder retrieved successfully.
 *       400:
 *         description: Bad request. Invalid or missing parameters.
 *       404:
 *         description: Reminder not found.
 */

/**
 * @swagger
 * /reminder/createReminder:
 *   post:
 *     tags: [Reminders]
 *     summary: Create a new reminder
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - message
 *               - targetDate
 *               - targetTime
 *               - phoneNumber
 *               - selectedOption
 *             properties:
 *               title:
 *                 type: string
 *                 minLength: 1
 *                 maxLength: 1000
 *                 example: Test title
 *               message:
 *                 type: string
 *                 minLength: 1
 *                 maxLength: 1000
 *                 example: message
 *               targetDate:
 *                 type: string
 *                 format: date-time
 *                 example: 2023-01-16T18:35:07.259Z
 *               targetTime:
 *                 type: string
 *                 format: time
 *                 example: 4:15:07 PM
 *               phoneNumber:
 *                 type: number
 *                 example: 1234567890
 *               selectedOption:
 *                 type: number
 *                 example: 1
 *     responses:
 *       '200':
 *         description: Reminder added successfully
 *       '500':
 *         description: Internal server error
 *       '400':
 *         description: Bad request
 */

/**
 * @swagger
 * /reminder/updateReminder:
 *   put:
 *     tags: [Reminders]
 *     summary: Update a reminder by ID.
 *     description: Update an existing reminder by specifying its ID.
 *     parameters:
 *       - in: query
 *         name: reminderId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the reminder to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 minLength: 1
 *                 maxLength: 1000
 *                 example: Test title
 *               message:
 *                 type: string
 *                 minLength: 1
 *                 maxLength: 1000
 *                 example: message
 *               targetDate:
 *                 type: string
 *                 format: date-time
 *                 example: 2023-01-16T18:35:07.259Z
 *               targetTime:
 *                 type: string
 *                 format: time
 *                 example: 4:15:07 PM
 *               phoneNumber:
 *                 type: number
 *                 example: 1234567890
 *               selectedOption:
 *                 type: number
 *                 example: 1
 *     responses:
 *       200:
 *         description: Reminder updated successfully.
 *       400:
 *         description: Bad request. (You can add more specific error descriptions)
 *       404:
 *         description: Reminder not found.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /reminder/deleteReminder:
 *   delete:
 *     tags: [Reminders]
 *     summary: Delete a reminder by ID.
 *     description: Delete an existing reminder by specifying its ID.
 *     parameters:
 *       - in: query
 *         name: reminderId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the reminder to delete.
 *     responses:
 *       200:
 *         description: Reminder deleted successfully.
 *       400:
 *         description: Bad request. (You can add more specific error descriptions)
 *       404:
 *         description: Reminder not found.
 *       500:
 *         description: Internal server error.
 */

const express = require("express");
const router = express.Router();
const reminderController = require("../controllers/reminder");

router.get("/getReminders", reminderController.getReminders);
// define the about route
router.post("/createReminder", reminderController.createReminder);
router.get("/getReminder", reminderController.getReminder);
router.put("/updateReminder", reminderController.updateReminder);
router.delete("/deleteReminder", reminderController.deleteReminder);
module.exports = router;
