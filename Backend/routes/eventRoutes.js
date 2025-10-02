// routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

// POST /api/event/register
router.post('/register', eventController.register);

module.exports = router;
