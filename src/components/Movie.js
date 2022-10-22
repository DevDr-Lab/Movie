import React from "react";
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from "react-router-dom";

function Movie({title, year, summary, poster, genres}) {
    return (
        <div className="movie">
            <Link
                to={{
                    pathname: '/movie-detail', state: { year, title, summary, poster, genres },
                }}>
                <img src={poster} alt={title} title={title} />
                <div className="movie_data">  
                    <h3 className="movie_title">{title}</h3>
                    <h5 className="movie_year">{year}</h5>
                    <p className="movie_summary">{summary.slice(0, 180)}...</p>
                    <ul className="movie_genres">
                        {genres.map((genre) =>
                        {
                            return <li className="movie_genre">{genre}</li> // list 형태로 출력
                        })}
                    </ul>
                </div>
            </Link>
        </div>
    )
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired, // arrayOf(PropTypes.string): 문자열을 원소로 하는 배열을 의미함
};

export default Movie;