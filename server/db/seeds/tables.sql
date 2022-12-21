-- Users table seeds here (Example)
INSERT INTO users (name, email, password)
VALUES ('Rachel Green', 'rachelG@gmail.com', '123'),
('Ross Geller', 'dinodude@hotmail.com', '123'),
('Chandler Bing', 'mschnandlerbong@outlook.com', '123');

INSERT INTO events (user_id, title, location, date, time, description, thumbnail)
VALUES (3, 'Food for you', 'Bens Diner', '2022-12-22','1:30','Best places to eat', 'https://media.blogto.com/listings/2020827-stock.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70'),
(1, 'Shop til you drop', 'Eaton Centre', '15:30','T07:00:00.000Z','The spots to shop. Find your pashmina', 'https://media.istockphoto.com/photos/woman-holding-sale-shopping-bags-consumerism-shopping-lifestyle-picture-id1254508881?k=20&m=1254508881&s=612x612&w=0&h=d6KO9oMB3cMLGSFEu5GoGbYX0RpkHSEoUCARo7UagTI='),
(2, 'Red Ross', 'Royal Museum', '2022-12-22','20:30', 'Musuems and art galleries', 'https://t3.ftcdn.net/jpg/02/06/11/90/360_F_206119095_AP0mloOqjp7zqOUQaXb08TrZdvrOJPtK.jpg');

