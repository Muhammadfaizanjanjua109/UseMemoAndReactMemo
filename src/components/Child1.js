import React, { useEffect, useMemo, useState } from "react";
const Child1 = () => {
  const [child1, setchild1] = useState(0);
  console.log("Child1");
  useEffect(() => {
    slowFunc();
  }, [child1]);

  const double = useMemo(() => {
    slowFunc(child1);
  }, [child1]);
  console.log(double);

  function slowFunc(child1w) {
    return child1w * 2;
  }
  return (
    <>
      <p>cxvx {double}</p>
      <button onClick={() => setchild1(child1 + 1)}>{child1}</button>
    </>
  );
};
export const MemoChild1 = React.memo(Child1);
