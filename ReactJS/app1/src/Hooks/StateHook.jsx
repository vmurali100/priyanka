import React, { useState, useEffect } from "react";

export const StateHook = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = "Hello World";
  }, []);
  return (
    <div>
      <p>You Clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};
