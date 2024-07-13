import React from "react";

const HoverCounter = (props) => {
  const { count, incrementCount } = props;
  return (
    <div>
      <h2 onMouseOver={incrementCount}>Hovered {count} time </h2>
    </div>
  );
};
export default HoverCounter;
