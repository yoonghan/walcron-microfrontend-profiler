import { useState } from "react";

/*Simple react component with states*/
const Button = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>{counter}</div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        I am Button
      </button>
    </div>
  );
};

export default Button;
