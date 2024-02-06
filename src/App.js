import React from "react";
import MovieList from "./MovieList";
import Navbar from  './Navbar'
import { movies } from "./MovieData";

// import MovieCard from "./MovieCard";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      movies : movies,
      cartCount :0,

    }
  }

  handleIncStar = (movie) => {
    const {movies} = this.state; 
    const mid = movies.indexOf(movie);
    if(movies[mid].star >= 5){
      return;
    }
    movies[mid].star += 0.5

    this.setState({
      movies: movies
    })
  }

  handleDecStar = (movie) => {
    const {movies} = this.state;
    const mid = movies.indexOf(movie);
    if(movies[mid].star <= 0){
      return;
    } 
    movies[mid].star -= 0.5
    this.setState({
      movies
    })
  }

  handleToggleFav = (movie) => {
    const {movies} = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].fav = !movies[mid].fav;
    this.setState({
      movies
    })
  }

  handleToggleCart = (movie) => {
    let {movies,cartCount} = this.state;
    const mid = movies.indexOf(movie);
    movies[mid].isInCart = !movies[mid].isInCart;
    if(movies[mid].isInCart){
      cartCount = cartCount+1;
    }else{
      cartCount-=1
    }
    this.setState({
      movies,
      cartCount
    })
  }

  render(){
    const {movies, cartCount} = this.state
    return (
      <div className="App">
        <>
          <Navbar cartCount={cartCount}/>
          
          <MovieList movies = {movies} 
            addStar={this.handleIncStar}
            reduceStar={this.handleDecStar}
            toggleFavorite={this.handleToggleFav}
            toggleCart = {this.handleToggleCart}
          />
      
  
  
        </>
      </div>
    )
  }
  
}


export default App;


