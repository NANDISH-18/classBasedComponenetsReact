import React from 'react'
import MovieCard from './MovieCard'
// import { movies } from './MovieData';

class MovieList extends React.Component{

  render() {
    const {movies , addStar, reduceStar, toggleCart, toggleFavorite} = this.props
    return (
      <>
        {movies.map((movie, index) => (
          <MovieCard movies = {movie} key={index} 
            addStar={addStar}
            reduceStar={reduceStar}
            toggleFavorite={toggleFavorite}
            toggleCard = {toggleCart}
          />
        ) )}
      </>
    )
  }
}

export default MovieList