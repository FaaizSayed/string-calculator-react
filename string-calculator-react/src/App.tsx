import { useState } from "react";
import { add } from "./utils/stringCalculator";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
      setError(null);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("An unknown error occurred");
      }
      setResult(null);
    }
  };

  return (
    <div style={{ padding: 32 }}>
      <h1>String Calculator</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={4}
        cols={50}
        placeholder="Enter numbers, e.g. 1,2\n3 or //;\n1;2"
      />
      <br />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <p>Sum: {result}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default App;
