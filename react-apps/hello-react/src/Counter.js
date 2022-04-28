import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const onCountUp = () => {
    setCount(count + 1);
  };
  return(
    <div>
      <div>Counter</div>
    </div>
  );
};

export default Counter;