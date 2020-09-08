import React from "react";
import "./App.css";
import "./components/Counter";
import Counter from "./components/Counter";
import CounterHook from "./components/CounterHook";
import FormHook from "./components/FormHook";

function App() {
  return (
    <div className='App'>
      {/* <Counter /> */}
      {/* <CounterHook /> */}
      <FormHook />
    </div>
  );
}

export default App;
