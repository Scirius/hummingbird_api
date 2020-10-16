const express = require("express");
const router = express.Router();
const usersController = require('../controllers/usersController');

// Get all users
router.get('/', usersController.getAllUsers);

// Post/Create a user
router.post('/', usersController.createUser);

// Get user by id
router.get('/:id', usersController.getUserById);

// Retrieve all the messages for a specific user
router.get('/', usersController.getMessagesByUserId);

module.exports = router;