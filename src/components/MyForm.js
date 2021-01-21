import React, { Component } from "react";

export default class Myform extends Component {
  state = {
    name: "",
    pet: "",
    rememberMe: false,
    title: "Mr.",
  };

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handlePet = (event) => {
    this.setState({
      pet: event.target.value,
    });
  };

  handleCheckboxClick = (event) => {
    this.setState({
      rememberMe: event.target.checked,
    });
  };

  handleSelect = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <input onChange={this.handleNameChange} />
        <input
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={this.handleCheckboxClick}
        />
        <textarea
          value={
            this.state.title +
            " " +
            this.state.name +
            "   " +
            this.state.rememberMe
          }
          readOnly
        />
        <div>
          <select value={this.state.title} onChange={this.handleSelect}>
            <option>Mr.</option>
            <option>Ms.</option>
            <option>Miss.</option>
            <option>Mrs.</option>
          </select>
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
