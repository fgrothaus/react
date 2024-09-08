import { log } from "console";
import React from "react";

export function Bedingtes_rendern () {

    // Man hat die Möglichkeit, einen Teil des Programms bedingt zu rendern. Dies wird über einen Bool gesteuert

    const valid = true;

    return (
    <React.Fragment>
        {valid && <div>hi</div>}
    </React.Fragment>
    )
}