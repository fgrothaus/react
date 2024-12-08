import { log } from "console";
import React, {useEffect, useState} from "react";

export function Bedingtes_rendern () {

    // Man hat die Möglichkeit, einen Teil des Programms bedingt zu rendern. Dies wird über einen Bool gesteuert

    const [valid, setValid] = useState(true);

    return (
    <React.Fragment>
        {valid && <div>Hi</div>}
    </React.Fragment>
    )
}

export function Bedingtes_rendern2 () {

    const [valid, setValid] = useState(true);


    return (
        <React.Fragment>
            <button onClick={() => {setValid(false)}}>Set false</button>
            <button onClick={() => {setValid(true)}}>Set true</button>
            {valid && <div>Moinsen</div>}
        </React.Fragment>
    )
}