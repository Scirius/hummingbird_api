const express = require("express");
const router = express.Router();
const messagesController = require('../controllers/messagesController');

// Get all messages
router.get('/', messagesController.getAllMessages);

// Get all messages incl user details (via LEFT joining users entry)
router.get('/incluser', messagesController.getAllMessagesInclUser);

// Create New message
router.get('/', messagesController.createNewMessage);

// Select message by ID
router.get('/:id', messagesController.getMessageById);

module.exports = router;