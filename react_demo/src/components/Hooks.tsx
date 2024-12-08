import React, {useEffect, useState} from "react";

export function Hooks(){


    // In React werden keine Klassen mehr verwendet, sondern Funktionen. In dem Fall hier die Funktion "Hooks"
    // Modernes React will aber trotzdem sowas wie Instanzvariablen und Lifecycle Methoden nutzen. Dies wird umgesetzt durch HOOKS

    // Hooks beginnen immer mit "use" am Anfang
    // Sie dürfen nicht in Schleifen oder if-Abfragen verwendet werden

    // useState() ist ein Hook -> Instanzvariable
    let [satz, setSatz] = useState("moin sag ich");

    // useEffect wird immer ausgeführt, wenn Hooks() neu gerendert wird. Es ist ein Ersatz für Lifecycle Methoden
    useEffect(() => {
        console.log(satz);
    });

    return (
        <React.Fragment>
            <button onClick={() => {setSatz(satz+"nochmal")}}>moinzähler</button>
        </React.Fragment>
    )
}