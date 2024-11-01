import React, {useEffect, useState} from "react";
import userdata from "../data/userdata.json";
export function JsonReader() {

    console.log(JSON.stringify(userdata.kesseboehmer.abteilungen.IT[0]));

    return (
        <React.Fragment>
            {/*<pre>{JSON.stringify(userdata, null, 2)}</pre>*/}
        </React.Fragment>
    )
}