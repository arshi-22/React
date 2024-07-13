import React, { Component } from "react";
import FRInput from "./FRInput";

class FRParentInput extends Component {
  render() {
    return (
      <div>
        FRParentInput
        <FRInput />
        <button>Focus Input</button>
      </div>
    );
  }
}

export default FRParentInput;
