import React from "react";

export function Events () {
    

    const handleOk = () => {
        console.log("ok clicked");
    };


    const handleOk2: React.MouseEventHandler<HTMLButtonElement> = (event) => { // Das ist die typisierte Variante. Nochmal nachgucken, was genaua damit gemeint ist.
        console.log(event);
        
    };


    return (
    <React.Fragment>
        <button onClick={handleOk2}>Ok</button>
    </React.Fragment>
    )
}