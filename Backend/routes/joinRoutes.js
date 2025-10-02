// routes/joinRoutes.js - Routes for join form submissions
const express = require('express');
const router = express.Router();
const joinController = require('../controllers/joinController');
const { validateJoinRequest } = require('../middleware/validation');

// POST /api/join - Submit a new join request
router.post('/', validateJoinRequest, joinController.submitJoinRequest);

// GET /api/join - Get all join requests (admin only in future)
router.get('/', joinController.getAllJoinRequests);

// GET /api/join/stats - Get join request statistics
router.get('/stats', joinController.getJoinStats);

// GET /api/join/interests - Get interest distribution
router.get('/interests', joinController.getInterestStats);

// GET /api/join/:id - Get specific join request
router.get('/:id', joinController.getJoinRequestById);

// PUT /api/join/:id/status - Update join request status (admin only in future)
router.put('/:id/status', joinController.updateJoinRequestStatus);

module.exports = router;
