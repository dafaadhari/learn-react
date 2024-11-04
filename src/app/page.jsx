"use client"
import Counter from "@/components/StateManagement/useState";
import CounterReducer from "@/components/StateManagement/useReducer";
import { useCount } from "@/components/StateManagement/useCount";
import CounterRedux from '@/components/StateManagement/Redux/CounterRedux';

const Page = () => {
  const {count, setCount} = useCount();
  return (
    <div style={{ padding: '10px' }}>
        <div style={{ marginBottom: '25px' }}>
            <h2>useState</h2>
            <Counter />
        </div>
        <div style={{ marginBottom: '25px' }}>
            <h2>useReducer</h2>
            <CounterReducer />
        </div>
        <div style={{ marginBottom: '25px'}}>
          <h2>contextAPI</h2>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
        <div>
          <CounterRedux />
        </div>
    </div>
  );
};

export default Page;