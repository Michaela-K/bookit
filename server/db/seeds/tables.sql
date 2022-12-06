-- Users table seeds here (Example)
INSERT INTO users (name, email, password)
VALUES ('Rachel Green', 'rachelG@gmail.com', '123'),
('Ross Geller', 'dinodude@hotmail.com', '123'),
('Chandler Bing', 'mschnandlerbong@outlook.com', '123');

INSERT INTO events (user_id, title, location, lat, lng, date, time, description,  created_at, thumbnail)
VALUES (5, 'Pizza Palooza', 'Everywhere to find good pizza!', 43.6532, -79.3832,  '2018-12-31T08:22:30.000Z', 'https://media.istockphoto.com/photos/tasty-pepperoni-pizza-and-cooking-ingredients-tomatoes-basil-on-black-picture-id1083487948?k=20&m=1083487948&s=612x612&w=0&h=ROZ5t1K4Kjt5FQteVxTyzv_iqFcX8aqpl7YuA1Slm7w='),
(3, 'Food for you', 'Best places to eat', 43.6532, -79.3832, '2018-04-14T07:00:00.000Z', 'https://media.blogto.com/listings/2020827-stock.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70'),
(1, 'Shop til you drop', 'The spots to shop. Find your pashmina', 43.6532, -79.3832, '2018-06-14T07:00:00.000Z', 'https://media.istockphoto.com/photos/woman-holding-sale-shopping-bags-consumerism-shopping-lifestyle-picture-id1254508881?k=20&m=1254508881&s=612x612&w=0&h=d6KO9oMB3cMLGSFEu5GoGbYX0RpkHSEoUCARo7UagTI='),
(2, 'Red Ross', 'Musuems and art galleries', 43.6532, -79.3832, '2020-08-22T07:00:00.000Z','https://t3.ftcdn.net/jpg/02/06/11/90/360_F_206119095_AP0mloOqjp7zqOUQaXb08TrZdvrOJPtK.jpg'),
(4, 'Whiskey Wednesday', 'Best places to go for a drink', 43.6532, -79.3832, '2021-09-09T07:00:00.000Z', 'https://media.istockphoto.com/photos/glass-of-whiskey-with-ice-on-colorful-christmas-lights-bokeh-picture-id1179303998?k=20&m=1179303998&s=612x612&w=0&h=lOMfVDRgj4jMvuQo78HuV784K7lPsr8J2T5xqVETxUo=');



