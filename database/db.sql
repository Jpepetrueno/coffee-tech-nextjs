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
    discount INT UNSIGNED NOT NULL,
    paymentMethod VARCHAR(50) NOT NULL,
    product_total_price DECIMAL(10, 2) NOT NULL,
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (idClient) REFERENCES client(id),
    FOREIGN KEY (idEmployee) REFERENCES employee(id),
    FOREIGN KEY (idProduct) REFERENCES product(id)
);


-- Trigger para actualizar el stock de los productos al insertar una nueva venta
DELIMITER //
CREATE TRIGGER update_product_stock AFTER INSERT ON sale
FOR EACH ROW
BEGIN
    UPDATE product SET quantity = quantity - NEW.quantity WHERE id = NEW.idProduct;
END;
// DELIMITER ;


-- Trigger para actualizar el total de precio de los productos de la tabla de ventas (sale)
DELIMITER //
CREATE TRIGGER update_product_total_price BEFORE INSERT ON sale
FOR EACH ROW
BEGIN
    DECLARE product_total_price DECIMAL(10, 2);
    SELECT price INTO product_total_price FROM product WHERE id = NEW.idProduct;
    SET NEW.product_total_price = product_total_price * NEW.quantity * (1 - (NEW.discount/ 100));
END;
// DELIMITER ;
