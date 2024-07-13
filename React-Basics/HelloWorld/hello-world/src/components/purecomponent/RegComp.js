import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log(" _________RegComp_____", this.props.name);
    return <div>RegComp {this.props.name}</div>;
  }
}
export default RegComp;
