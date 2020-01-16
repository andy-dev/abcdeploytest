import React, { useContext } from "react";

const Step = props => {
  return (
    <>
      <h1>STEP</h1>
      <pre>
        <code>{JSON.stringify(props, null, 4)}</code>
      </pre>
    </>
  );
};

export default Step;
