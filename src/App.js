import "./App.css";
import Button from "./components.js/Button";
import Number from "./components.js/Number";
import { useState } from "react";
import BigNumber from "./components.js/BigNumber";

function App() {
  const [boxNum, setBoxNum] = useState([
    { id: 1, number: 1 },
    { id: 2, number: 2 },
    { id: 3, number: 3 },
    { id: 4, number: 4 },
    { id: 5, number: 5 },
  ]);

  const incrementar = () => {
    if (boxNum[4].number < 20) {
      const nextBoxNum = boxNum.map((element) => {
        const container = {};
        container.number = element.number += 1;
        container.id = element.id += 1;

        return container;
      });
      setBoxNum(nextBoxNum);
    }
  };

  const decrementar = () => {
    if (boxNum[0].number > 0) {
      const nextBoxNum = boxNum.map((element) => {
        const container = {};
        container.number = element.number -= 1;
        container.id = element.id -= 1;

        return container;
      });
      setBoxNum(nextBoxNum);
    }
  };
  const divNum = document.querySelectorAll(".numero");
  /*   const divNum = document.querySelectorAll(".numero");
  divNum.addEventListener("click", imprimir);

  function imprimir() {
    console.log(this.id);
  } */

  const [bigNumber, setBigNumber] = useState("");
  console.log(divNum);
  const printNumber = () => {
    console.log(divNum);
    //console.log(divNum.number);
    setBigNumber(boxNum.number);
  };

  return (
    <>
      <div className="buttons">
        <Button text="<<" actionOnClick={decrementar} />
        {boxNum.map((box) => (
          <Number
            key={box.id}
            number={box.number}
            actionOnClick={printNumber}
          />
        ))}
        <Button text=">>" actionOnClick={incrementar} />
      </div>
      <BigNumber number={bigNumber} />
    </>
  );
}

export default App;
