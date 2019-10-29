import React, { Component } from "react";

export default class FilmListing extends Component {
  render() {
    return (
      <div className="card">
        <h3>{this.props.item.houseName}</h3>
        <img src={this.props.item.imgSrc} alt={this.props.item.houseName} />
        <p>
          <strong>Founder: </strong> {this.props.item.founder}{" "}
        </p>
        <p>
          <strong>Element: </strong>
          {this.props.item.element}
        </p>
      </div>
    );
  }
}
