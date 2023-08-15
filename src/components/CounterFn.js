import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counter";

const CounterFn = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value); // Use 'state.counter.value' instead of 'state.count.value'
  
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default CounterFn;
