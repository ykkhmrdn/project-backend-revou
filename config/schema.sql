-- CREATE DATABASE IF NOT EXISTS `express_mysql`;
-- USE `express_mysql`;

-- CREATE TABLE IF NOT EXISTS Products (
--  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--  nama VARCHAR(225) NOT NULL,
--  harga INT NOT NULL,
--  deskripsi VARCHAR(225) NOT NULL
-- )

-- --Insert value
-- INSERT INTO Products(nama, harga, deskripsi)
--  VALUES('Baju Adidas', '100000', 'Ini adalah baju adidas');

--Membuat databases RobinCode
CREATE DATABASE IF NOT EXISTS `RobinCode.db`;
USE `RobinCode.db`;

--Membuat Table team-members
CREATE TABLE IF NOT EXISTS team_members (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(255) NOT NULL,
 role VARCHAR(255) NOT NULL,
 socialMedia VARCHAR(255) NOT NULL,
 image VARCHAR(255) NOT NULL
);

--Membuat Table products
CREATE TABLE IF NOT EXISTS products (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(255) NOT NULL,
 brand VARCHAR(255) NOT NULL,
 type VARCHAR(255) NOT NULL,
 price INT NOT NULL,
 image VARCHAR(255) NOT NULL,
 rating INT NOT NULL,
 description TEXT NOT NULL,
 reviews TEXT NOT NULL
);

--DROP TABLE products;

--Membuat Table form
CREATE TABLE IF NOT EXISTS form (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(255) NOT NULL,
 email VARCHAR(255) NOT NULL,
 message TEXT NOT NULL
);

--insert value form
INSERT INTO form(name, email, message)
 VALUES('Prada', 'prada.dipa@gmail.com', 'Saya Prada');

--insert value products
 INSERT INTO products(name, brand, type, price, image, rating, description, reviews)
    VALUES('Adicolor Classics Hoodie', 'H&M', 'Used', '19.99','../Img/hoodie model.jpg','4.5',
    'The Adicolor Classics Hoodie is a versatile and stylish addition to your wardrobe. Crafted with care, this hoodie offers both comfort and durability. Its classic design and premium finish make it a timeless choice. Whether youre going for a casual look or layering up for colder weather, this hoodie has got you covered.',
    'Im really impressed with the quality of this hoodie. Its worth every penny.'
    );