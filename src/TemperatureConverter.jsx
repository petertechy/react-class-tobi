import { useState } from "react";

const CelsiusInput = ({ value, onTemperatureChange }) => {
  return (
    <div className="my-2">
      <label>Celsius: </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </div>
  );
};

const FahrenheitInput = ({ value, onTemperatureChange }) => {
  return (
    <div className="my-2">
      <label>Fahrenheit: </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </div>
  );
};

const TemperatureConverter = () => {
  // the single source of truth (kept as text so the input can be empty)
  const [celsius, setCelsius] = useState("");

  const fahrenheit = celsius === "" ? "" : (celsius * 9) / 5 + 32;

  const handleFahrenheitChange = (value) => {
    setCelsius(value === "" ? "" : ((value - 32) * 5) / 9);
  };

  return (
    <div className="mx-auto col-7 my-3 p-4">
      <h2>Temperature Converter</h2>
      <CelsiusInput value={celsius} onTemperatureChange={setCelsius} />
      <FahrenheitInput
        value={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />
      {celsius !== "" && celsius >= 100 && <p>Water boils!</p>}
      {celsius !== "" && celsius <= 0 && <p>Water freezes!</p>}
    </div>
  );
};

export default TemperatureConverter;
