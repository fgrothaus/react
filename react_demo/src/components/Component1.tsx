//import React from "react"
import React, { useState, useEffect } from "react";

export function Component1() {


    const [zahl, setZahl] = useState(100); 



    return (
        <React.Fragment>
            <div id="test">{zahl}</div>
        </React.Fragment>    
    )
}