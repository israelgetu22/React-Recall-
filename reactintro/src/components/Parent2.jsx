import React, { useState } from "react";

import Child from "./Child";

function Parent2() {
  const [userInput, setUserInput] = useState("");

  return (
    <div>
      <h1>Parent Component </h1>
      <Child userInput={userInput} setUserInput={setUserInput} />
      <h1>{userInput}</h1>
    </div>
  );
}

export default Parent2;
