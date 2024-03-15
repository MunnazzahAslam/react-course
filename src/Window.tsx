import { useEffect, useState } from "react";

function Window() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    // useEffect is a react hook that tells React to run a function when something happens
    // it takes 2 arguments: function and dependencies
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
        document.title = `Window width: ${width}, height: ${height}`
    }, [width, height]);

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }


    return (
        <div>
            Window width: {width}, height: {height}
        </div>
    );
}

export default Window;