-- Users table seeds here (Example)
INSERT INTO users (name, email, password)
VALUES ('Rachel Green', 'rachelG@gmail.com', '123'),
('Ross Geller', 'dinodude@hotmail.com', '123'),
('Chandler Bing', 'mschnandlerbong@outlook.com', '123');

INSERT INTO events (user_id, title, location, lat, lng, description,  created_at, thumbnail)
VALUES (3, 'Food for you', 'Bens Diner',43.6532, -79.3832, 'Best places to eat', '2018-04-14T07:00:00.000Z', 'https://media.blogto.com/listings/2020827-stock.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70'),
(1, 'Shop til you drop', 'Eaton Centre', 43.6532, -79.3832, 'The spots to shop. Find your pashmina', '2018-06-14T07:00:00.000Z', 'https://media.istockphoto.com/photos/woman-holding-sale-shopping-bags-consumerism-shopping-lifestyle-picture-id1254508881?k=20&m=1254508881&s=612x612&w=0&h=d6KO9oMB3cMLGSFEu5GoGbYX0RpkHSEoUCARo7UagTI='),
(2, 'Red Ross', 'Royal Museum',43.6532, -79.3832, 'Musuems and art galleries', '2020-08-22T07:00:00.000Z','https://t3.ftcdn.net/jpg/02/06/11/90/360_F_206119095_AP0mloOqjp7zqOUQaXb08TrZdvrOJPtK.jpg');

