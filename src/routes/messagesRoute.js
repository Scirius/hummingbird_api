const express = require("express");
const router = express.Router();
const messagesController = require('../controllers/messagesController');

// Get all messages (incl. userdata as well)
router.get('/', messagesController.getAllMessages);

// Create New message
router.get('/', messagesController.createNewMessage);

// Select message by ID
router.get('/:id', messagesController.getMessageById);

module.exports = router;