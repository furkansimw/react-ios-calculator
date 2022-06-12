import React, { useState } from "react";
import { btns } from "./btns";

const App = () => {
  const [operator, setOperator] = useState<null | string>(null);
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const tap = (_text: any) => {
    if (
      _text === "÷" ||
      _text === "+" ||
      _text === "%" ||
      _text === "-" ||
      _text === "x"
    ) {
      setOperator(_text);
    } else if (true) {
      if (operator === null) {
        const _cache = num1 * 10;
        const text = _cache + _text;
        setNum1(text);
        setResult(text);
      } else {
        const _cache = _text * 10;
        const text = num2 + _text;
        setNum2(text);
        setResult(text);
      }
    }
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
