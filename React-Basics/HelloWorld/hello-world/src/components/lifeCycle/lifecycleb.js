import React, { Component } from "react";

class LifeCyleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Arshima",
    };
    console.log("Lifecycle B constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps");
    return null;
  }
  shouldComponentUpdate(nextProps, nextSate) {
    console.log("LifecycleB Update method-shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("LifecycleB Update method - getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log(" LifecycleB Update method - componentDidCatch");
  }

  componentDidMount() {
    console.log("LifecycleB - componentDidMount");
  }

  render() {
    return <div>LifeCycle B</div>;
  }
}

export default LifeCyleB;
