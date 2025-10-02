// middleware/validation.js - Validation middleware for API requests
const Joi = require('joi');

// Join request validation schema
const joinRequestSchema = Joi.object({
  name: Joi.string().min(2).max(255).required().messages({
    'string.empty': 'Name is required',
    'string.min': 'Name must be at least 2 characters long',
    'string.max': 'Name cannot exceed 255 characters'
  }),
  
  email: Joi.string().email().required().messages({
    'string.empty': 'Email is required',
    'string.email': 'Please provide a valid email address'
  }),
  
  interest: Joi.string().valid(
    'ai-ml', 'web-dev', 'mobile-dev', 'blockchain', 
    'robotics', 'cybersecurity', 'data-science', 'product'
  ).required().messages({
    'any.only': 'Please select a valid area of interest',
    'any.required': 'Area of interest is required'
  }),
  
  message: Joi.string().max(2000).optional().allow('').messages({
    'string.max': 'Message cannot exceed 2000 characters'
  }),
  
  consent: Joi.boolean().valid(true).required().messages({
    'any.only': 'You must agree to be contacted',
    'any.required': 'Consent is required'
  })
});

// Validate join request middleware
const validateJoinRequest = (req, res, next) => {
  const { error, value } = joinRequestSchema.validate(req.body, {
    abortEarly: false, // Return all validation errors
    stripUnknown: true // Remove unknown fields
  });

  if (error) {
    const errors = error.details.map(detail => ({
      field: detail.path.join('.'),
      message: detail.message
    }));

    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors
    });
  }

  // Add validated data to request
  req.body = value;
  next();
};

// Validate ID parameter middleware
const validateId = (req, res, next) => {
  const { id } = req.params;
  
  if (!id || isNaN(parseInt(id))) {
    return res.status(400).json({
      success: false,
      message: 'Invalid ID parameter'
    });
  }
  
  next();
};

// Validate status parameter middleware
const validateStatus = (req, res, next) => {
  const { status } = req.body;
  const validStatuses = ['pending', 'approved', 'rejected'];
  
  if (!status || !validStatuses.includes(status)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid status. Must be pending, approved, or rejected'
    });
  }
  
  next();
};

module.exports = {
  validateJoinRequest,
  validateId,
  validateStatus
};
