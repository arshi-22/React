import React, { Component } from "react";
import RegComp from "./RegComp";
import UseMemoExp from "../../functionalComponent/reactHook/useMemoExp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Arshima",
    };
  }

  componentDidUpdate() {
    setInterval(() => {
      this.setState = {
        name: "Arshima",
      };
    }, 2000);
  }

  render() {
    console.log(" _________ParentComp_____", this.props.name);
    return (
      <div>
        ParentComp
        <RegComp name={this.name} />
        <ParentComp name={this.name} />
        <UseMemoExp name={this.name} />
      </div>
    );
  }
}

export default ParentComp;
