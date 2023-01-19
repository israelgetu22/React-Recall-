import React, { Component } from "react";

class Parent extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
    };
  }

  render() {
    return (
      <div>
        <h2>Parent</h2>
        <h3>{this.state.userInput}</h3>
        <input
          type="text"
          onChange={(e) => this.setState({ userInput: e.target.value })}
        />
      </div>
    );
  }
}

export default Parent;
