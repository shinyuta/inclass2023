SELECT movies.movie_name AS movie, revies.review 
FROM reviews
JOIN movies
ON reviews.movie_id = movies.id
ORDER BY movies.movie_name

