CREATE DATABASE persons;

USE persons;

CREATE TABLE person(
id INT AUTO_INCREMENT,
f_name VARCHAR(50),
l_name VARCHAR(50),
profession VARCHAR(255),
age INT,
PRIMARY KEY(id)
);

INSERT INTO person(id,f_name,l_name,profession,age) 
VALUES ('1','Pedro','Lopes','teacher','26'),
('2','Pedro','Lopes','teacher','26'),
('3','Andre','Faria','librarian','35');