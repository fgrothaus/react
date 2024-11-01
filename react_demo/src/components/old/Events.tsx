import React, {useEffect, useState} from "react";

export function Events () {


    const [zahl1, setZahl1] = useState(0);
    const [zahl2, setZahl2] = useState(0);

    useEffect(() => {
        setZahl1(5);
        setZahl2(10);
    }, []);

    const handleOk = () => {
        console.log("ok clicked");
    };


    const handleOk2: React.MouseEventHandler<HTMLButtonElement> = (event) => { // Das ist die typisierte Variante. Nochmal nachgucken, was genaua damit gemeint ist.
        console.log(zahl1 + zahl2);
        
    };


    return (
    <React.Fragment>
        <button onClick={handleOk2}>{zahl1 + zahl2}</button>
    </React.Fragment>
    )
}