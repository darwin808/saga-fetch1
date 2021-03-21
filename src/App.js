import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addpeople, decrement, increment } from "./Actions/Actions";
import { fetchData } from "../src/saga/rootSaga";
function App() {
  const [name, setName] = useState("");
  const counter = useSelector((e) => e.CounterReducer);
  const dispatch = useDispatch();
  const people = useSelector((e) => e.PeopleReducer.peoples);

  /*  useEffect(() => {
    console.log(people);
  }); */

  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(addpeople());
  };
  return (
    <div className="App">
      <h1>{counter}</h1>

      <h1>{JSON.stringify(people)}</h1>
      <button onClick={() => dispatch(increment())}>ADD</button>
      <button onClick={() => dispatch(decrement())}>minu</button>

      <button onClick={() => dispatch(addpeople())}>user!!</button>

      <form action="submit" onSubmit={handlesubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>

      {people.map((e) => (
        <div key={e}>{e}</div>
      ))}
    </div>
  );
}

export default App;
