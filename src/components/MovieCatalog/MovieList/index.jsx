import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import MovieCard from '../MovieCard';

const MovieList = ({ movies }) => {
  return (
    <section className="MovieList">
      <p className="MovieList_lead">{ movies.length } movies found</p>
      <div className="MovieList_list">
        { movies.map((movie) => <MovieCard movie={movie} key={ movie.id } />) }
      </div>
    </section>
  )
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MovieList;
