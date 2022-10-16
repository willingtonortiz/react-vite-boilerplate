import { PropsWithChildren, useState } from "react";

export const Counter = ({
  initialValue = 0,
}: PropsWithChildren<{ initialValue?: number }>) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => setCounter((x) => x + 1);
  const decrement = () => setCounter((x) => x - 1);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
