import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counterSlice";

const Counter = () => {
    const value = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch();
  return (
    <div>
      <h2>Count: {value}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default Counter;
