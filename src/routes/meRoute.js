const express = require("express");
const router = express.Router();
const meController = require('../controllers/meController');

// Get all messages (incl. userdata as well)
router.get('/', meController.getRandomUser);

module.exports = router;