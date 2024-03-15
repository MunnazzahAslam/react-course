// useState re-renders the component when value changes
// useRef is a hook that allows you to persist values between renders
import { useRef, useEffect } from "react";

function UseRef() {
    // const [number, setNumber] = useState(0);
    // const ref = useRef(0);
    const inputRef = useRef(null);

    function handleClick () {
       inputRef.current.focus();
       inputRef.current.style.backgroundColor = 'blue';
    }

    useEffect(() => {
        console.log('component did mount');
    })
    return (
        <>
        <button onClick={handleClick}>
          Click
        </button>  
        <input type="text" ref={inputRef} />
        </>
    );
}

export default UseRef;