import React, { Component } from "react";

export default class FilmListing extends Component {
  render() {
    return (
      <div className="card">
        <h3>{this.props.item.charName}</h3>
        <img src={this.props.item.imgSrc} alt={this.props.item.charName} />
        <p>
          <strong>House: </strong>
          {this.props.house}
        </p>
      </div>
    );
  }
}
