import { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
// 

export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  // the useState hook creates a variable with variable name and a function name. The usestate function will take in
  // one argument to set the intial value of count.
  const [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  // helper function: 
  // when the function is called, the count is set to count + 1
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  // Helper function: 
  // if the count is currently greater than 0, it will decrease the count by 1 when called.
  const handleDecrement = () => {
    if (count > 0) {
      setCount((count - 1));
    }
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      {/* the count variable, and the 2 functions are being passed to CardBody*/}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
