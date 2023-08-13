import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counterslice.mjs";

function App() {
  const state1 = useSelector((state) => state.counter.value);
  const sendevent = useDispatch();
  return (
    <div>
      <p>the num: {state1} </p>
      <button onClick={() => sendevent(increment())}>+</button>
      <button onClick={() => sendevent(decrement())}>-</button>
    </div>
  );
}

export default App;
