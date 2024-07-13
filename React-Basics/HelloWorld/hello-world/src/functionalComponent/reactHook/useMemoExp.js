import React from "react";

const UseMemoExp = ({ name }) => {
  return <div>useMemoExp {name}</div>;
};
export default React.memo(UseMemoExp);
