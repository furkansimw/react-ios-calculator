import React, { useState } from "react";
import { btns } from "./btns";

const App = () => {
  const [operator, setOperator] = useState<null | string>(null);
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const tap = (_text: any) => {
    if (is(_text, ["+", "-", "-", "x", "÷", "%"])) {
      setOperator(_text);
    } else if (is(_text, ["="])) {
      if (operator === null) return;
      else {
        work();
      }
    } else {
      if (operator === null) {
        const number = num1 * 10 + _text;
        setNum1(number);
        setResult(number);
      } else {
        const number = num2 * 10 + _text;
        setNum2(number);
        setResult(number);
      }
    }
  };
  const work = () => {
    if (operator === "+") {
      setResult(num1 + num2);
    }
    if (operator === "-") {
      setResult(num1 - num2);
    }
    if (operator === "x") {
      setResult(num1 * num2);
    }
    if (operator === "÷") {
      setResult(num1 / num2);
    }
    if (operator === "%") {
      setResult(num1 % num2);
    }
  };
  const is = (_text: any, contains: string[]): boolean => {
    if (contains.includes(_text)) {
      return true;
    }
    return false;
  };
  return (
    <div className="App">
      <div className="result">{result}</div>
      <div className="btns">
        {btns.map((item) => {
          return (
            <div
              key={`Item ${item.text}`}
              onClick={() => tap(item.text)}
              className={`btn ${item.text} ${item.color} ${item.size}`}
            >
              {item.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
