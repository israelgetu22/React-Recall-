import React from "react";

function Child(props) {
  const handleChange = (e) => props.setUserInput(e.target.value);

  return (
    <div>
      <h1>Child</h1>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

export default Child;
