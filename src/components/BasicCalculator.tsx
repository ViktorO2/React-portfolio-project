import React, { useState } from "react";
import "./styles/BasicCalculator.css";

const Calculator: React.FC = () => {
  const [currentOperand, setCurrentOperand] = useState<string>("");
  const [previousOperand, setPreviousOperand] = useState<string>("");
  const [operation, setOperation] = useState<string | undefined>(undefined);
  const [overwrite, setOverwrite] = useState<boolean>(false);

  const appendValue = (value: string) => {
    if (overwrite) {
      setCurrentOperand(value);
      setOverwrite(false);
    } else {
      setCurrentOperand(currentOperand + value);
    }
  };

  const chooseOperation = (operation: string) => {
    if (currentOperand === "") return;
    if (previousOperand !== "") {
      compute();
    }
    setOperation(operation);
    setPreviousOperand(currentOperand);
    setCurrentOperand("");
  };

  const compute = () => {
    let result: number;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);

    if (operation) {
      switch (operation) {
        case "+":
          result = prev + current;
          break;
        case "-":
          result = prev - current;
          break;
        case "*":
          result = prev * current;
          break;
        case "/":
          result = prev / current;
          break;
        default:
          return;
      }
      setCurrentOperand(result.toString());
      setOperation(undefined);
      setPreviousOperand("");
      setOverwrite(true);
    }
  };

  const clear = () => {
    setCurrentOperand("");
    setPreviousOperand("");
    setOperation(undefined);
    setOverwrite(false);
  };

  return (
    <div className="basic-calculator">
      <input
        type="text"
        className="calculator-display"
        value={currentOperand}
        disabled
      />
      <div className="calculator-buttons">
        <button className="calculator-button clear" onClick={clear}>
          C
        </button>
        <button
          className="calculator-button operator"
          onClick={() => chooseOperation("/")}
        >
          /
        </button>
        <button
          className="calculator-button operator"
          onClick={() => chooseOperation("*")}
        >
          *
        </button>
        <button
          className="calculator-button operator"
          onClick={() => chooseOperation("-")}
        >
          -
        </button>
        {["7", "8", "9"].map((num) => (
          <button
            key={num}
            className="calculator-button number"
            onClick={() => appendValue(num)}
          >
            {num}
          </button>
        ))}

        <button
          className="calculator-button operator"
          onClick={() => chooseOperation("+")}
        >
          +
        </button>

        {["4", "5", "6"].map((num) => (
          <button
            key={num}
            className="calculator-button number"
            onClick={() => appendValue(num)}
          >
            {num}
          </button>
        ))}

        <button
          className="calculator-button number"
          onClick={() => appendValue(".")}
        >
          .
        </button>

        {["1", "2", "3"].map((num) => (
          <button
            key={num}
            className="calculator-button number"
            onClick={() => appendValue(num)}
          >
            {num}
          </button>
        ))}

        <button
          className="calculator-button number"
          onClick={() => appendValue("0")}
        >
          0
        </button>

        <button className="calculator-button equals" onClick={compute}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
