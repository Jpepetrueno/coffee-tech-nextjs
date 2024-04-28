CREATE DATABASE coffeetech;

USE coffeetech;

CREATE TABLE product(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    price DECIMAL(10, 2) NOT NULL,
    quantity INT UNSIGNED NOT NULL,
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE client(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phonenumber VARCHAR(255) NOT NULL,
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE employee(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    startDate VARCHAR(255) NOT NULL,
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

CREATE TABLE sale(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    idClient INT UNSIGNED NOT NULL,
    idEmployee INT UNSIGNED NOT NULL,
    idProduct INT UNSIGNED NOT NULL,
    quantity INT UNSIGNED NOT NULL,
    paymentMethod VARCHAR(50) NOT NULL,
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (idClient) REFERENCES client(id),
    FOREIGN KEY (idEmployee) REFERENCES employee(id),
    FOREIGN KEY (idProduct) REFERENCES product(id)
);

-- Esta consulta selecciona los datos completos de los clientes de la tabla de ventas (sale)
select c.* from sale s join client c on s.idClient = c.id;