import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment, setCounter } from "../../reducer/counter";
import { useState } from "react";

const Counter = () => {
    const [num, setNum] = useState("")
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  return (
    <div>
      <h1>Count: {counter.count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <input type="number" placeholder="123" onInput={(e) => setNum(e.target.value)}/>
      <button onClick={() => dispatch(setCounter(num))}>SetCount</button>
    </div>
  );
};

export default Counter;
