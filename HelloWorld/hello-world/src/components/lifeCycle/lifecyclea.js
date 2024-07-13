import React, { Component } from "react";
import LifeCyleB from "./lifecycleb";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Arshima",
    };
    console.log("Life cycleA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextSate) {
    console.log("Update method-shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("Update method - getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("Update method - componentDidCatch");
  }

  handleClick = () => {
    this.setState({
      name: "Clicked",
    });
  };

  render() {
    return (
      <div>
        LifeCycle A
        <div>
          <button onClick={this.handleClick}>Click Me</button>
        </div>
        <LifeCyleB />
      </div>
    );
  }
}

export default LifeCycleA;
