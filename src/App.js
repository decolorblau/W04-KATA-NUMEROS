import logo from "./logo.svg";
import "./App.css";
import Button from "./components.js/Button";
import Number from "./components.js/Number";
import { useState } from "react";

function App() {
  const boxNum = [
    { id: 1, number: 1 },
    { id: 2, number: 2 },
    { id: 3, number: 3 },
    { id: 4, number: 4 },
    { id: 5, number: 5 },
  ];
  const [number, setNumber] = useState(1);

  const incrementar = () => {
    if (number < 20) {
      setNumber(number + 1);
    }
  };
  const decrementar = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <>
      <Button text="<<" actionOnClick={decrementar} />
      {boxNum.map((box) => (
        <Number key={box.id} number={box.number} />
      ))}
      <Button text=">>" actionOnClick={incrementar} />
    </>
  );
}

export default App;
