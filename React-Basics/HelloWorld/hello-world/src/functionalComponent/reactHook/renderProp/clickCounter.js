import React from "react";

const ClickCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <div>
      <button onClick={incrementCount}>Clicked {count} time</button>
    </div>
  );
};
export default ClickCounter;
