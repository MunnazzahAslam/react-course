import { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `You clicked ${count} times with color ${color}`;
    }, [count, color]);

    const handleIncrement = () => {
        setCount(count+1);
    }

    const handleDecrement = () => {
        setCount(count-1);
    }

    const handleColorChange = () => {
        setColor(c => c === 'green' ? 'red' : 'green');
    }

    return (
        <div>
            <p className="count">{count}</p>
            <button className="button" onClick={handleIncrement}>Increment Count</button>
            <button className="button" onClick={handleDecrement}>Decrement Count</button>
            <button className="button" onClick={handleColorChange}>Change Color</button>
        </div>
    );
}

export default Counter;