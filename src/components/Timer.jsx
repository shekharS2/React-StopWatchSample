import React, { useEffect, useState } from 'react';

function Timer() {
    const [sec, setSec] = useState(0); //sec
    const [min, setMin] = useState(0); //min
    const [hour, setHour] = useState(0); //hour
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        let timer;
        if(timerOn) {
            timer = setInterval(() => {
                if(sec < 60) {
                    setSec(prev => prev + 1);
                }

                if(sec === 59) {
                    setSec(0);
                    setMin(prev => prev + 1);
                }

                if(min === 59) {
                    setMin(0);
                    setHour(prev => prev + 1);
                }
            }, 1000);
        }

        return () => clearInterval(timer);
    });
    
    const handleRestartTimer =() => {
        setSec(0);
        setMin(0);
        setHour(0);
    }


    const handleStopTimer = () => {
        setTimerOn(prev => !prev);
    }

    return (
        <div className='timer-container'>
            <p>{hour < 10 ? '0' : ''}{hour} : {min < 10 ? '0' : ''}{min} : {sec < 10 ? '0' : ''}{sec}</p>
            <div className='btn-container'>
                <button onClick={handleRestartTimer}>RESET</button>
                <button onClick={handleStopTimer} >
                    {timerOn && 'STOP'}
                    {!timerOn && hour === 0 && min === 0 && sec === 0 && 'START'}
                    {!timerOn && (hour !== 0 || min !== 0 || sec !== 0) && 'RESUME'}
                </button>
            </div>
        </div>
    );
}

export default Timer;