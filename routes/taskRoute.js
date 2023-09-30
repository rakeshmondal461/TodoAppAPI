/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: API operations related to tasks
 */

/**
 * @swagger
 * /task/getAllTask:
 *   get:
 *     tags: [Tasks]
 *     summary: Get a list of tasks.
 *     description: Retrieve a list of tasks.
 *     responses:
 *       200:
 *         description: A list of tasks.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /task/getTask:
 *   get:
 *     tags: [Tasks]
 *     summary: Get a task by ID
 *     description: Retrieve a task using its unique identifier.
 *     parameters:
 *       - in: query
 *         name: taskId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the task to retrieve.
 *     responses:
 *       200:
 *         description: Task retrieved successfully.
 *       400:
 *         description: Bad request. Invalid or missing parameters.
 *       404:
 *         description: Task not found.
 */

/**
 * @swagger
 * /task/createTask:
 *   post:
 *     tags: [Tasks]
 *     summary: Create a new task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - targetDate
 *               - targetTime
 *               - priorityType
 *             properties:
 *               title:
 *                 type: string
 *                 minLength: 1
 *                 maxLength: 1000
 *                 example: Test title
 *               description:
 *                 type: string
 *                 minLength: 1
 *                 maxLength: 1000
 *                 example: test description
 *               targetDate:
 *                 type: string
 *                 format: date-time
 *                 example: 2023-01-16T18:35:07.259Z
 *               targetTime:
 *                 type: string
 *                 format: time
 *                 example: 4:15:07 PM
 *               priorityType:
 *                 type: number
 *                 example: 1
 *     responses:
 *       '200':
 *         description: Resource added successfully
 *       '500':
 *         description: Internal server error
 *       '400':
 *         description: Bad request
 */

/**
 * @swagger
 * /task/updateTask:
 *   put:
 *     tags: [Tasks]
 *     summary: Update a task by ID.
 *     description: Update an existing task by specifying its ID.
 *     parameters:
 *       - in: query
 *         name: taskId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the task to update.
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
 *                 example: Updated Task Title
 *               description:
 *                 type: string
 *                 minLength: 1
 *                 maxLength: 1000
 *                 example: Updated Task Description
 *               targetDate:
 *                 type: string
 *                 format: date-time
 *                 example: 2023-01-16T18:35:07.259Z
 *               targetTime:
 *                 type: string
 *                 format: time
 *                 example: 4:15:07 PM
 *               priorityType:
 *                 type: number
 *                 example: 1
 *     responses:
 *       200:
 *         description: Task updated successfully.
 *       400:
 *         description: Bad request. (You can add more specific error descriptions)
 *       404:
 *         description: Task not found.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /task/deleteTask:
 *   delete:
 *     tags: [Tasks]
 *     summary: Delete a task by ID.
 *     description: Delete an existing task by specifying its ID.
 *     parameters:
 *       - in: query
 *         name: taskId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the task to delete.
 *     responses:
 *       200:
 *         description: Task deleted successfully.
 *       400:
 *         description: Bad request. (You can add more specific error descriptions)
 *       404:
 *         description: Task not found.
 *       500:
 *         description: Internal server error.
 */

const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task");

router.get("/getAllTask", taskController.getTasks);
// define the about route

router.post("/createTask", taskController.createTask);
router.get("/getTask", taskController.getTask);
router.put("/updateTask", taskController.updateTask);
router.delete("/deleteTask", taskController.deleteTask);

module.exports = router;
