import { useState, useEffect } from "react";
export default function ProgressBar({ duration }) {
  const [timeRemaining, setTimeRemaining] = useState(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interval");
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      console.log("Interval Clear");
      clearInterval(interval);
    };
  }, []);
  return <progress value={timeRemaining} max={duration} />;
}
