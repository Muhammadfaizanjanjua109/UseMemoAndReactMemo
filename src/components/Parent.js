import React, { useState } from "react";
import { MemoChild1 } from "./Child1";
import { MemoChild2 } from "./Child2";
const Parent = () => {
  const [counter, setcounter] = useState(0);
  console.log("Hello I am Parent");

  return (
    <>
      <MemoChild1 />
      <MemoChild2 />
      <button onClick={() => setcounter(counter + 1)}>{counter}</button>
    </>
  );
};
export default Parent;
