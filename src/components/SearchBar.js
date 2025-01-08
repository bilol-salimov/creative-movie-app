import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    search: "spider",
    type: "all",
  };

  handleText = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleType = (e) => {
    this.setState(
      () => ({
        type: e.target.dataset.type,
      }),
      () => {
        this.props.searchBar(this.state.search, this.state.type);
      }
    );
  };

  enterSearchText = (e) => {
    if (e.key === "Enter")
      this.props.searchBar(this.state.search, this.state.type);
  };

  render() {
    const { search } = this.state;
    return (
      <div className="search-wrapper">
        <form onSubmit={this.handleSubmit} action="#" className="search-bar">
          <input
            type="search"
            name="search"
            pattern=".*\S.*"
            autoComplete="off"
            onChange={this.handleText}
            onKeyUp={this.enterSearchText}
            value={search}
            required
          />
          <button className="search-btn" type="submit">
            <span>Search</span>
          </button>
        </form>

        <div className="typeSelector">
          <div className="btn-group">
            <label className="movies">
              <input
                type="radio"
                name="toggle"
                data-type="movie"
                onChange={this.handleType}
                checked={this.state.type === "movie"}
              />
              <span>Movies</span>
            </label>
            <label className="all">
              <input
                type="radio"
                name="toggle"
                data-type="all"
                onChange={this.handleType}
                checked={this.state.type === "all"}
              />
              <span>All</span>
            </label>
            <label className="series">
              <input
                type="radio"
                name="toggle"
                data-type="series"
                onChange={this.handleType}
                checked={this.state.type === "series"}
              />
              <span>Series</span>
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
