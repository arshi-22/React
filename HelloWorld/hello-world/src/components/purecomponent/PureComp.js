import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
    console.log(" _________purecoponent_____",this.props.name);
    return <div>purecoponent {this.props.name}</div>;
  }
}

export default PureComp;
