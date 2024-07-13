import React from "react";

function Column() {
  const items = [];
  return (
    <>
      {/* react-dom.development.js:67  Warning: validateDOMNesting(...): <td> cannot appear as a child of <div>. */}
      <td>Hello WOrld</td>
      {items.map((item) => {
        <React.Fragment key={item.index}>
          {/* can add key attribute with react fragment */}
          <h1>{item}</h1>
        </React.Fragment>;
      })}
    </>
  );
}

export default Column;
