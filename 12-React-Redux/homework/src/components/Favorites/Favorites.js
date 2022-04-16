import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {
  

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
            this.props.favoriteMovies.map((movie) => {
              return (
                <li key={movie.imdbID}>
                  <Link to={`/movie/${movie.imdbID}`}>
                    {movie.title}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favoriteMovies: state.moviesFavourites
  };
}




export default connect(mapStateToProps)(ConnectedList)