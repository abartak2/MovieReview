import React from 'react';
import StarRating from './stars';
import ShowData from './review';

// create placeholder image in the event a movie does not have an image
const DEFAULT_PLACEHOLDER_IMAGE =
  "https://storage.googleapis.com/afs-prod/media/e53811360eed4b8ba26b5f635d703a7c/3000.jpeg";

// create movie to display the poster, title, and year
const Movie = ({movie}) => {
    const poster =
    movie.Poster=== "N/A" ? DEFAULT_PLACEHOLDER_IMAGE: movie.Poster;
    return (
        <div className="movie">
            <h2>{movie.Title}</h2>
            <div>
                <img 
                width="200"
                alt={`The movie titled: ${movie.Title}`}
                src={poster}
                />
            </div>
            <p>({movie.Year})</p>
            {/* add the table component to hold the data */}
            <label><ShowData /></label>
        </div>
    );
};

export default Movie;