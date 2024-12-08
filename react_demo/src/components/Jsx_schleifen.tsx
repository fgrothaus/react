import React from "react";

export function Jsx_schleifen(){
    // Kann man auch außerhalb von JSX machen
    const lst = ["moin", 3, 6];
    const lstRs = lst.map((e, index) => {
        return <ol key={index}>{e}</ol>;
    })


    // Im return einer React Komponente spricht man von JSX Programmierung. Mit Dieser kann man HTML schreiben, was von React intern in JS umgewandelt wird
    return (
        // In JSX kann man KEINE normalen Schleifen verwenden, sondern nur map
        <React.Fragment>
            <li>
                {
                    [1, 2, 3].map((e, index) => {
                        console.log(e);
                        // Beim verwenden der map-Funktion sollte immer der index als key genutzt werden.
                        // Es muss immer etwas returned werden
                        return <ol key={index}>{e * 10}</ol>;
                    })
                }
            </li>
            <li>
                {lstRs}
            </li>
        </React.Fragment>
    );
}