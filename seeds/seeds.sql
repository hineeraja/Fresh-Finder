USE FreshFinder_db;
SET FOREIGN_KEY_CHECKS=0;

-- inserts for products
INSERT INTO products (name, description, image_name, price, stock, categoryId, createdAt, updatedAt) VALUES
('1lb Banana', 'Shop Bananas at Fresh Finder.', 'img1.png', '8.99', '119', '2', '2023-08-09 21:09:01', '2023-08-09 21:09:01'),
('2lb Banana', 'Shop Bananas at Fresh Finder.', 'img2.png', '20.99', '75', '2', '2023-08-09 21:09:01', '2023-08-09 21:09:01'),
('3lb Banana', 'Shop Bananas at Fresh Finder.', 'img3.png', '39.99', '155', '2', '2023-08-09 21:09:01', '2023-08-09 21:09:01'),
('5lb Banana', 'Shop Bananas at Fresh Finder.', 'img4.png', '58.99', '32', '2', '2023-08-09 21:09:01', '2023-08-09 21:09:01'),
('10lb Banana', 'Bulk Deal... Shop Bananas at Fresh Finder.', 'img5.png', '75.99', '63', '2', '2023-08-09 21:09:01', '2023-08-09 21:09:01'),
('1lb Apple', 'Shop Apples at Fresh Finder.', 'img5.png', '8.99', '76', '1', '2023-08-09 21:09:01', '2023-08-09 21:09:01'),
('2lb Apple', 'Shop Apples at Fresh Finder.', 'img6.png', '20.99', '92', '1', '2023-08-09 21:09:01', '2023-08-09 21:09:01'),
('3lb Apple', 'Shop Apples at Fresh Finder.', 'img7.png', '39.99', '43', '1', '2023-08-09 21:09:01', '2023-08-09 21:09:01'),
('5lb Apple', 'Shop Apples at Fresh Finder.', 'img8.png', '58.99', '16', '1', '2023-08-09 21:09:01', '2023-08-09 21:09:01'),
('10lb Apple', 'Bulk Deal... Shop Apples at Fresh Finder.', 'img10.png', '75.99', '11', '1', '2023-08-09 21:09:01', '2023-08-09 21:09:01');

-- inserts for categories
INSERT INTO categories (name, description, image_name) VALUES
('Apple', 'Shop  Apple!', 'Apple.png'),
('banana', 'Shop bananas!', 'banana.png');


-- inserts for users
INSERT INTO users (username, password, email, createdAt, updatedAt) VALUES
('Neeraja', '$2b$10$6ovU8giiTYBSIVMc7GLy5evwtzAZcaWpxLamt7BNotH.JUdZ7btnC', 'neeraja@test.com', '2023-08-09 21:09:01', '2023-08-09 21:09:01'),
('Vishnu', '$2b$10$A3DkmZhJI/ZRSHyBQLc4U.IDiGtuPYPZo8Ffcg4Gs9C290H5Lskya', 'vishnu@gmail.com', '2023-08-09 21:09:01', '2023-08-09 21:09:01'),
('Indu', '$2b$10$dFcPPJQ6iijpdaHH475xqOoYJq3Q7YY3itx.Hotly.XL9y3URc1m6', 'Indu@gmail.com', '2023-08-09 21:09:01', '2023-08-09 21:09:01');

-- inserts for cart_items
INSERT INTO cart_items (num, each_price, userId, productId) VALUES
('1', '20.99', '1', '12'),
('1', '39.99', '1', '13'),
('4', '8.99', '1', '6'),
('3', '8.99', '2', '1'),
('2', '75.99', '2', '5'),
('1', '58.99', '2', '14'),
('2', '20.99', '2', '12');

SET FOREIGN_KEY_CHECKS=1;