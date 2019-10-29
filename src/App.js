import React, { Component } from "react";
import Houses from "./Houses";
import houses from "./Data";
import Character from "./Character";
import "./harryPstyle.css";

class App extends Component {
  render() {
    var allHouses = houses.map(item => <Houses item={item} />);
    var allCharacters = houses.map(item => (
      <Character house={item.houseName} item={item.notableCharacter} />
    ));
    return (
      <div>
        <h1> Houses</h1>
        {allHouses}
        <h1>Characteres</h1>
        {allCharacters}
      </div>
    );
  }
}

export default App;
