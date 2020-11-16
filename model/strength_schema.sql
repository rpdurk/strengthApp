DROP DATABASE IF EXISTS strengthApp_db;
CREATE DATABASE strengthApp_db;
USE strengthApp_db;
CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(20) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);
CREATE TABLE workouts (
    id INT AUTO_INCREMENT NOT NULL,
    workoutName VARCHAR(255) NOT NULL,
    userId INT references users(id),
    exercises VARCHAR(255),
    PRIMARY KEY (id)
);
CREATE TABLE exercises (
    id INT AUTO_INCREMENT NOT NULL,
    exerciseName VARCHAR(255) NOT NULL,
    userId INT references users(id),
    setTotal INT NOT NULL,
    repetitionsCompletedPerSet VARCHAR(255) NOT NULL,
    weightUsedPerSet VARCHAR(255),
    exerciseDate DATE NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE userBiometrics (
    id INT AUTO_INCREMENT NOT NULL,
    userId INT references users(id),
    height INT NOT NULL,
    weight INT NOT NULL,
    weightDate DATE NOT NULL,
    PRIMARY KEY (id)
);