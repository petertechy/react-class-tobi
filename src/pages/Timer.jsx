import { useState, useRef, useEffect } from "react";
function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  const start = () => {
    if (timerRef.current) return; // already running, ignore
    setRunning(true);
    timerRef.current = setInterval(() => {
      setSeconds((s) => 
        {
    console.log(s + 1);
    return s + 1;
  });
    }, 1000);
  };

  const stop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setRunning(false);
  };

  const reset = () => {
    stop();
    setSeconds(0);
  };

//   useEffect(() => {
//   console.log(seconds);
// }, [seconds]);

  // Clean up if the component unmounts while running
  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);
  return (
    <div>
      <h2>{seconds}s</h2>
      <button onClick={start} disabled={running}>
        Start
      </button>
      <button onClick={stop} disabled={!running}>
        Stop
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
