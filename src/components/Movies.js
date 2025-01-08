import React, { Component } from "react";
import Card from "./Card";

class Movies extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movies">
        {movies && movies.length > 0 ? (
          movies.map((movie) => <Card key={movie.imdbID} {...movie} />)
        ) : (
          <div className="page-404">
            <div className="gif">
              <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif" />
            </div>
            <div className="content">
              <h1 className="main-heading">Movie is not found</h1>
              <p>
                ...maybe the movie you're looking for is not found or never
                existed.
              </p>
              <a href="index.html">
                <button>
                  Back to home <i className="far fa-hand-point-right"></i>
                </button>
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Movies;
