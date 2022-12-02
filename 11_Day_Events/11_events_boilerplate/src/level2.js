import React, { Component } from "react";

class MovingText extends Component {
  state = {
    left: 0,
    top: 0,
  }

  handleMouseMove = (e) => {
    this.setState({ 
      left: this.getRandomLeft(), 
      top: this.getRandomTop() 
    });
  }

  render() {
    return (
      <div 
        onMouseMove={this.handleMouseMove}
        style={{ position: 'absolute', left: this.state.left, top: this.state.top }}
      >
        <h1>30 Days of React</h1>
      </div>
    )
  }

  getRandomLeft() {
    const textWidth = 230;
    const max = window.innerWidth - textWidth;
    return this.getRandomInt(0, max);
  }

  getRandomTop() {
    const textHeight = 50;
    const max = window.innerHeight - textHeight;
    return this.getRandomInt(0, max);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export default MovingText;