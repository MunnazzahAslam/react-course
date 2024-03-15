import { useState, useEffect } from "react";

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        
        return () => clearInterval(interval);
    }, [])

    return (<div className="digital-clock">
       <div className="clock">{time.toLocaleTimeString()}</div> 
    </div>);
}

export default DigitalClock;