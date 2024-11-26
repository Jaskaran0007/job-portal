CREATE DATABASE IF NOT EXISTS job_portal;

USE job_portal;

CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL
);

-- Insert users for your team members
INSERT INTO users (username, password, email) VALUES
('prabhat_munjal', 'prabhat123', 'prabhat.munjal@email.com'),
('jaskaran_singh', 'jaskaran456', 'jaskaran.singh@email.com'),
('himanshu_malviya', 'himanshu789', 'himanshu.malviya@email.com'),
('angad_singh_yadav', 'angad101', 'angad.singh.yadav@email.com');