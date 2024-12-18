import React, {useState} from "react";

export function Hooks_Arbeitsweise() {

    const [counter, setCounter] = useState(0);



    return (
        <React.Fragment>
            <button onClick={() => {
                setCounter(counter +1);
            }}>Count</button>
            <div>{counter}</div>
        </React.Fragment>
    );
}