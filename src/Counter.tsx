import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count+1);
    }
    return (
        <div>
            <p className="count">{count}</p>
            <button className="button" onClick={handleIncrement}>Increment Count</button>
        </div>
    );
}

export default Counter;