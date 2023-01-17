import { useState, useEffect } from "react";

function Timer({ seconds }) {
  // Declare a state variable for the remaining time
  const [remainingTime, setRemainingTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const start = () => {
    setRemainingTime(seconds);
    setIsActive(true);
  };
  useEffect(() => {
    setRemainingTime(seconds);
    return () => {};
  }, []);

  useEffect(() => {
    if (isActive) {
      // Update the timer every 1 second
      var timerId = setInterval(() => {
        // Decrement the remaining time
        setRemainingTime(remainingTime - 1);
      }, 1000);
    }

    // Clear the interval when the component is unmounted
    return () => clearInterval(timerId);
  }, [remainingTime]);

  // Calculate the minutes and seconds
  var minutes = Math.floor(remainingTime / 60);
  var remainingSeconds = remainingTime % 60;

  // Add leading zeros to the minutes and seconds
  minutes = minutes.toString().padStart(2, "0");
  remainingSeconds = remainingSeconds.toString().padStart(2, "0");

  return (
    <>
      <div id="timer">
        {minutes}:{remainingSeconds}
      </div>
      <button onClick={start} disabled={isActive}>
        start
      </button>
    </>
  );
}

export default Timer;
