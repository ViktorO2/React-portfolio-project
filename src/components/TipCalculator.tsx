import React, { useCallback, useMemo, useState } from "react";
import "./styles/TipCalculator.css";

const TipCalculator: React.FC = () => {
  const [bill, setBill] = useState<number | "">("");
  const [tip, setTip] = useState<number | "">("");

  const totalAmount = useMemo(() => {
    const billAmount = parseFloat(bill as string) || 0;
    const tipPercentage = parseFloat(tip as string) || 0;
    return (billAmount + billAmount * (tipPercentage / 100)).toFixed(2);
  }, [bill, tip]);

  const handleCalculate = useCallback((e: React.FormEvent) => {
    e.preventDefault();
  }, []);

  return (
    <div className="tip-calculator">
      <h1>Tip Calculator</h1>
      <form onSubmit={handleCalculate}>
        <div className="form-group">
          <label htmlFor="bill">Bill Amount: </label>
          <input
            type="number"
            id="bill"
            value={bill}
            onChange={(e) =>
              setBill(e.target.value ? parseFloat(e.target.value) : "")
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="tip">Tip Percentage: </label>
          <input
            type="number"
            id="tip"
            value={tip}
            onChange={(e) =>
              setTip(e.target.value ? parseFloat(e.target.value) : "")
            }
          />
        </div>

        <button type="submit" className="calculate-button">
          {" "}
          Calculate
        </button>
      </form>
      {totalAmount && (
        <div className="result">
          <strong>Total Amount: ${totalAmount}</strong>
        </div>
      )}
    </div>
  );
};
export default TipCalculator;
