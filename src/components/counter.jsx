import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
  state = {
    count: 0
  };

  //constructor(){
  //super();
  //this.handeIncrement = this.handeIncrement.bind(this);
  //}

  handeIncrement = () => {
    //console.log("Increment Clicked", this);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handeIncrement}>Increment</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
