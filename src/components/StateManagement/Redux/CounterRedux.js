"use client";

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

function CounterRedux() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Counter</h2>
      <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())} style={{ marginRight: '5px'}}>Increment</button>
        <button onClick={() => dispatch(decrement())} style={{ marginRight: '5px'}}>Decrement</button>
        <button onClick={() => dispatch(reset())} style={{ marginRight: '5px'}}>Reset</button>
    </div>
  );
}

export default CounterRedux;
