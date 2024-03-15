import { useState, createContext } from "react";
import ComponentB from "./ComponentB";
export const userContext = createContext('');

function ComponentA() {
    const [user] = useState('Munnazzah');

    return (
        <div className="box">
            <h4>ComponentA</h4>
            <h6>{user}</h6>
            <userContext.Provider value={user}>
                <ComponentB />
            </userContext.Provider>
        </div>)
}

export default ComponentA;