import React, { useState } from "react";
function Hook() {
  const [name, setName] = useState("Ganesh");
  const [roll, setRoll] = useState(101);
  const handleClick = () => {
    setName("Ganesh kumar gupta");
    setRoll(105);
  };

  return (
    <React.Fragment>
      <h3>Name : {name}</h3>
      <h4>Roll : {roll}</h4>
      <button
        type="button"
        className="btn btn-primary btn-large"
        onClick={handleClick}
      >
        Change
      </button>
    </React.Fragment>
  );
}

export default Hook;
