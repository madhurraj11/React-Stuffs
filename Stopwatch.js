import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
    const [timeValue, setTimeValue] = useState(0);
    const [running, setRunning] = useState(false);
    const [timeInterval, setTimeInterval] = useState(null);

    const startTimer = () => {
        if (!running) {
            setRunning(true);
            const intervalId = setInterval(() => {
                setTimeValue((prevTime) => prevTime + 1);
            }, 1000);
            setTimeInterval(intervalId);
        }
    }

    const stopTimer = () => {
        if (running) {
            setRunning(false);
            clearInterval(timeInterval);
            setTimeInterval(null);
        }
    }

    const resetTimer = () => {
        setTimeValue(0);
        setRunning(false);
        clearInterval(timeInterval);
        setTimeInterval(null);
    }

    useEffect(() => {
        // Cleanup interval on component unmount
        return () => {
            clearInterval(timeInterval);
        };
    }, [timeInterval]);

    const formatTime = (totalSeconds) => {
        const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        const seconds = String(totalSeconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <div>
            <div id="timer">{formatTime(timeValue)}</div>
            <div id="buttons">
                <button id="startBtn" onClick={startTimer}>
                    Start
                </button>
                <button id="stopBtn" onClick={stopTimer}>
                    Stop
                </button>
                <button id="resetBtn" onClick={resetTimer}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Stopwatch;