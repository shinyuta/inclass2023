-- Add your code below and execute file in MySQL Shell --
SELECT favorite_books.book_name
FROM favorite_books
JOIN book_prices ON favorite_books.book_price = book_prices.id;
