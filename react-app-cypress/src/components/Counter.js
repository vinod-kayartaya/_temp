import React, { useState } from 'react';

const Counter = () => {
  const [count, setCout] = useState(0);
  const increment = () => {
    setCout(count + 1);
  };
  return (
    <>
      <h3>Counter app</h3>
      <hr />
      <div>{count}</div>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default Counter;
