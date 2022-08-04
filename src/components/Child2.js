import React, { useEffect, useState } from "react";
const Child2 = () => {
  console.log("Child2");

  const [child2, setchild2] = useState(0);
  const [child2a, setchild2a] = useState("Child2");
  return (
    <>
      <button onClick={() => setchild2(child2 + 1)}>{child2}</button>
      <h1>{child2}</h1>
      <button onClick={() => setchild2a("Hey")}>{child2a}</button>
    </>
  );
};
export const MemoChild2 = React.memo(Child2);
