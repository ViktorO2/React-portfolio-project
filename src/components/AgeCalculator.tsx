import React, { useCallback, useEffect, useMemo, useState } from "react";
import "../components/styles/AgeCalculator.css";

interface AgeCalculatorState {
  birthdate: string;
  error: string;
}

const AgeCalculator: React.FC = () => {
  const [state, setState] = useState<AgeCalculatorState>({
    birthdate: "",
    error: "",
  });

  useEffect(() => {
    const birthDateObj = new Date(state.birthdate);
    const today = new Date();
    if (birthDateObj > today) {
      setState((prev) => ({
        ...prev,
        error: "Date of birth cannot be in the future.",
      }));
    } else {
      setState((prev) => ({ ...prev, error: "" }));
    }
  }, [state.birthdate]);

  const ageResult = useMemo((): string => {
    if (!state.birthdate) return "";

    const birthDateObj = new Date(state.birthdate);
    const today = new Date();

    let age: number = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff: number = today.getMonth() - birthDateObj.getMonth();
    const dayDiff: number = today.getDate() - birthDateObj.getDate();

    if (birthDateObj > today) {
      return "";
    }

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return `You are ${age} years old.`;
  }, [state.birthdate]);

  const handleDateChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setState({ birthdate: e.target.value, error: "" });
    },
    [],
  );

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <div className="form-group">
        <label htmlFor="birthdate">Enter your date of birth:</label>
        <input
          type="date"
          id="birthdate"
          value={state.birthdate}
          onChange={handleDateChange}
        />
      </div>
      {state.error && <div className="error-message">{state.error}</div>}
      {ageResult && <div className="result">{ageResult}</div>}
    </div>
  );
};

export default AgeCalculator;
