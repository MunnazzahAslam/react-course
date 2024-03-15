import { useContext } from "react";
import ComponentC from "./ComponentC";
import { userContext } from "./ComponentA";
function ComponentB() {
    const user = useContext(userContext);

    return (<div className="box">
        <h4>ComponentB</h4>
        <h6>{user}</h6>
        <ComponentC />
    </div>)
}

export default ComponentB;