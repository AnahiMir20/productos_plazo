CREATE DATABASE cotizacion

USE cotizacion


CREATE TABLE products (
    SKU INT NOT NULL, 
    [name] VARCHAR (50),
    [description] VARCHAR (100),    
    price INT NOT NULL,
    PRIMARY KEY (SKU)
)


INSERT INTO products (SKU,[name],[description],price) VALUES (111111,'Lavadora','lavadora SAMSUNG',10950)
INSERT INTO products (SKU,[name],[description],price) VALUES (222222,'XBox','XBox series x',12000)
INSERT INTO products (SKU,[name],[description],price) VALUES (333333,'Microondas','Microondas con fundidor SAMSUNG',4150)

SELECT * FROM products 

CREATE TABLE users
(
    id_user INT NOT NULL IDENTITY(1,1),
    email CHAR(35) NOT NULL,
    [name] CHAR(30) NOT NULL,
    last_name CHAR(30) NOT NULL,
    [password] CHAR(100) NOT NULL,
    PRIMARY KEY (id_user)
)

INSERT INTO users
  (email,[name],last_name,[password])

VALUES
  ('leo@mail.com', 'Leonardo', 'Figueroa','leopass'),
  ('ani@mail.com', 'Anahi', 'Miranda','anipass'),
  ('edgi@mail.com','Edgar', 'Bastida','edgipass');
  
 

SELECT * FROM users

CREATE TABLE deadlines
(
    id_deadlines INT NOT NULL IDENTITY(1,1),
    weeks INT NOT NULL,
    normal_rate DECIMAL (18,4) NOT NULL,
    punctual_rate DECIMAL (18,4) NOT NULL,
    PRIMARY KEY (id_deadlines)
)

INSERT INTO deadlines
  (weeks, normal_rate, punctual_rate)

VALUES
  (3, 1.0166, 0.6963),
  (6, 1.0266, 0.7963),
  (2, 1.0366, 0.8963);

SELECT * FROM deadlines





