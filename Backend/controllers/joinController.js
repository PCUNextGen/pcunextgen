// controllers/joinController.js - Controller for join form operations
const JoinRequest = require('../models/JoinRequest');

// Submit a new join request
const submitJoinRequest = async (req, res) => {
  try {
    const joinData = req.body;
    
    // Create new join request
    const result = await JoinRequest.create(joinData);
    
    if (result.success) {
      res.status(201).json({
        success: true,
        message: 'Join request submitted successfully!',
        data: {
          id: result.data.insertId,
          ...joinData
        }
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Failed to submit join request',
        error: result.error
      });
    }
  } catch (error) {
    console.error('Error submitting join request:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

// Get all join requests
const getAllJoinRequests = async (req, res) => {
  try {
    const result = await JoinRequest.getAll();
    
    if (result.success) {
      res.status(200).json({
        success: true,
        message: 'Join requests retrieved successfully',
        data: result.data,
        count: result.data.length
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve join requests',
        error: result.error
      });
    }
  } catch (error) {
    console.error('Error getting join requests:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

// Get join request by ID
const getJoinRequestById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await JoinRequest.getById(id);
    
    if (result.success) {
      if (result.data.length === 0) {
        return res.status(404).json({
          success: false,
          message: 'Join request not found'
        });
      }
      
      res.status(200).json({
        success: true,
        message: 'Join request retrieved successfully',
        data: result.data[0]
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve join request',
        error: result.error
      });
    }
  } catch (error) {
    console.error('Error getting join request:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

// Update join request status
const updateJoinRequestStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    if (!['pending', 'approved', 'rejected'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status. Must be pending, approved, or rejected'
      });
    }
    
    const result = await JoinRequest.updateStatus(id, status);
    
    if (result.success) {
      if (result.data.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: 'Join request not found'
        });
      }
      
      res.status(200).json({
        success: true,
        message: 'Join request status updated successfully',
        data: { id, status }
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to update join request status',
        error: result.error
      });
    }
  } catch (error) {
    console.error('Error updating join request status:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

// Get join request statistics
const getJoinStats = async (req, res) => {
  try {
    const result = await JoinRequest.getStats();
    
    if (result.success) {
      res.status(200).json({
        success: true,
        message: 'Statistics retrieved successfully',
        data: result.data[0]
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve statistics',
        error: result.error
      });
    }
  } catch (error) {
    console.error('Error getting statistics:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

// Get interest distribution statistics
const getInterestStats = async (req, res) => {
  try {
    const result = await JoinRequest.getInterestStats();
    
    if (result.success) {
      res.status(200).json({
        success: true,
        message: 'Interest statistics retrieved successfully',
        data: result.data
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Failed to retrieve interest statistics',
        error: result.error
      });
    }
  } catch (error) {
    console.error('Error getting interest statistics:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message
    });
  }
};

module.exports = {
  submitJoinRequest,
  getAllJoinRequests,
  getJoinRequestById,
  updateJoinRequestStatus,
  getJoinStats,
  getInterestStats
};
