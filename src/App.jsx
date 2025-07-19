import { useState } from "react";
import Counter from "./components/Counter/Counter";
import { useSelector } from "react-redux";
import Users from "./components/Users";

function App() {
  const count = useSelector((store) => store.counter.count);

  return (
    <div className="container">
      <Users></Users>
    </div>
  );
}

export default App;
