import { useState, useEffect, useRef } from "react";
function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const internalRef = useRef(null);
    const startTime = useRef(0);
    
    useEffect(() => {
        if (isRunning) {
            internalRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTime.current);
            }, 10);
        } else {
            clearInterval(internalRef.current);
        }
    }, [isRunning]);

    function startStopwatch() {
        setIsRunning(true);
        startTime.current = Date.now() - elapsedTime;
    }

    function stopWatch() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {
        let minutes = String(Math.floor(elapsedTime / (1000 * 60) % 60)).padStart(2, '0');
        let seconds = String(Math.floor(elapsedTime / (1000) % 60)).padStart(2, '0');
        let milliseconds = String(Math.floor((elapsedTime % 1000) /10)).padStart(2, '0');

        return `${minutes}:${seconds}:${milliseconds}`;
    }

    return (
        <div className="stopwatch">
            <div className="clock">{formatTime()}</div>
            <div className="controls">
            <button onClick={startStopwatch}>Start</button>
            <button onClick={stopWatch}>Stop</button>
            <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default Stopwatch;