CREATE DATABASE IF NOT EXISTS job_portal;
USE job_portal;

CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    role VARCHAR(20) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO users (username, password, email, role) VALUES
('prabhat_munjal', SHA2('prabhat123', 256), 'prabhat.munjal@email.com', 'admin'),
('jaskaran_singh', SHA2('jaskaran456', 256), 'jaskaran.singh@email.com', 'user'),
('himanshu_malviya', SHA2('himanshu789', 256), 'himanshu.malviya@email.com', 'user'),
('angad_singh_yadav', SHA2('angad101', 256), 'angad.singh.yadav@email.com', 'user');

SELECT * FROM users;