import React from "react";
import Movies from "../components/Movies";
import SearchBar from "../components/SearchBar";
class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=ec5812e1&s=spider")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchBar = (text, type = "all") => {
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=ec5812e1&s=${text}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

  render() {
    const { movies } = this.state;
    return (
      <main>
        <SearchBar searchBar={this.searchBar} />

        <div className="container">
          <Movies movies={movies} />
        </div>
      </main>
    );
  }
}

export default Main;
