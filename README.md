# WeLoveMovies
Backend Capstone Project for Thinkful.



The API can be found deployed [here](https://welovemovies-znj.herokuapp.com/).

# This Project Is Intended To Test My Ability To:
- Install and use common middleware packages
- Receive requests through routes
- Run tests from the command line
- Access relevant information through route and query parameters
- Create an error handler for the case where a route doesn't exist
- Build an API following RESTful design principles
- Create and customize a knexfile.js file
- Create a connection to your database with Knex
- Write database queries to complete CRUD routes in an Express server
- Return joined and nested data with Knex
- Write database migrations using Knex's migration tool
- Deploy your backend server to a cloud service

## Technologies Utilized:
- Node.js
- Express.js
- Knex.js
- PostgreSQL

## Routes:
- `GET /movies`
\- return a list of all movies
- `GET /movies?is_showing=true`
\- return a list of all movies that are currently showing
- `GET /movies/:movieId`
\- return a single movie by ID
- `GET /movies/:movieId/theaters`
\- return all the theaters where a movie is playing
- `GET /movies/:movieId/reviews`
\- return all the reviews for a movie
- `PUT /reviews/:reviewId`
\-  partially or fully update a review
- `DELETE /reviews/:reviewId`
\- delete a review by ID
- `GET /theaters`
\- return a list of all theaters
