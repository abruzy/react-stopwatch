import React, { useState, useRef } from "react";

import "./App.css";

function App() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const getSeconds = (timer) => {
    return `0${timer % 60}`.slice(-2);
  };

  const getMinutes = (timer) => {
    let minutes = `${Math.floor(timer / 60)}`;

    return `0${minutes % 60}`.slice(-2);
  };

  const getHours = (timer) => {
    return `0${Math.floor(timer / 3600)}`.slice(-2);
  };

  return (
    <div className='App'>
      <div className='clock'>
        <span className='hrs' id='hrs'>
          {getHours(timer)}
        </span>
        <span className='mins' id='mins'>
          {getMinutes(timer)}
        </span>
        <span className='secs' id='secs'>
          {getSeconds(timer)}
        </span>
      </div>
      <div className='buttons'>
        {!isActive && !isPaused ? (
          <button onClick={handleStart}>Start</button>
        ) : isPaused ? (
          <button onClick={handlePause}>Pause</button>
        ) : (
          <button onClick={handleResume}>Resume</button>
        )}
        <button onClick={handleReset} disabled={!isActive}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
