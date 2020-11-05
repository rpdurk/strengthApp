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
    workoutDate DATE NOT NULL,
    exercises VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE exercises (
	id INT AUTO_INCREMENT NOT NULL,
    exerciseName VARCHAR(255) NOT NULL,
    musclesUsed VARCHAR(255),
    userId INT references users(id),
    workoutId INT references workouts(id),
    exerciseDate DATE NOT NULL,
    setTotal INT NOT NULL,
    reptitionsGoalPerSet VARCHAR(255) NOT NULL,
    reptitionsCompletedPerSet VARCHAR(255) NOT NULL,
    weightUsedPerSet VARCHAR(255) ,
    timeUsedPerSet VARCHAR(255) ,
    restUsedPerSet VARCHAR(255) ,
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