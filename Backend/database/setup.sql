-- Database Setup for NextGen Club
-- This script creates the necessary database and tables

-- Create database
CREATE DATABASE IF NOT EXISTS nextgen_db;
USE nextgen_db;

-- Create join_requests table
CREATE TABLE IF NOT EXISTS join_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    interest ENUM('ai-ml', 'web-dev', 'mobile-dev', 'blockchain', 'robotics', 'cybersecurity', 'data-science', 'product') NOT NULL,
    message TEXT,
    consent BOOLEAN DEFAULT TRUE,
    status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create index for better performance
CREATE INDEX idx_email ON join_requests(email);
CREATE INDEX idx_status ON join_requests(status);
CREATE INDEX idx_created_at ON join_requests(created_at);

-- Insert sample data (optional)
INSERT INTO join_requests (
    name, 
    email, 
    interest,
    message,
    consent
) VALUES (
    'John Doe',
    'john.doe@example.com',
    'ai-ml',
    'I am passionate about innovation and technology. I want to learn more about AI and machine learning to build solutions that can make a positive impact.',
    TRUE
);

SELECT 'Database setup completed successfully!' as message;
