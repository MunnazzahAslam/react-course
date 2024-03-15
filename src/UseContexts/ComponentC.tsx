import { useContext } from "react";
import { userContext } from './ComponentA';

function ComponentC() {
    const user = useContext(userContext);

    return (<div className="box">
        <h4>ComponentC</h4>
        <h6>{user}</h6>
    </div>)
}

export default ComponentC;