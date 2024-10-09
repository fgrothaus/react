import { log } from "console";
import React, {useEffect, useState} from "react";

export function Bedingtes_rendern () {

    // Man hat die Möglichkeit, einen Teil des Programms bedingt zu rendern. Dies wird über einen Bool gesteuert

    const valid = true;

    return (
    <React.Fragment>
        {valid && <div>Hi</div>}
    </React.Fragment>
    )
}

export function Bedingtes_rendern2 () {

    const valid = true;

    return (
        <React.Fragment>
            {valid && <div>Moinsen</div>}
        </React.Fragment>
    )
}