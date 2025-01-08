import React, { Component } from "react";

class Card extends Component {
  render() {
    const { Title, Year, Type, Poster } = this.props;
    return (
      <div className="card">
        <div className="card-header">
          <img src={Poster} alt="" />
        </div>
        <div className="card-body">
          <h3>{Title}</h3>
          <p>{Year}</p>
          <p>{Type}</p>
        </div>
      </div>
    );
  }
}

export default Card;
