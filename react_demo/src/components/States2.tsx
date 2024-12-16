import React, { useState } from "react";

export function States2(){

    // Funktionale Aktualisierung
    const [data, setData] = useState(1);
    console.log("Außerhalb des Buttons" + data);


    // Lazy Initialisierung läuft synchron. Nicht für Requests geeignet und langlaufende Berechnungen
    const initData = () => {
        return 10 + 10;
    };
    const [state, setState] = useState(() => initData()); // Es wird nur initial beim ersten Rendern der Komponente der Zustand gerendert. Danach nicht mehr! Wird selten gebraucht
    console.log(state); // Macht nur Sinn, wenn man sich aus Performancegründen Berechnungen bei Rerendern sparen will. React prüft dann diesen State nicht auf eine Veränderung
    
    
    return (
        <React.Fragment>
            <button onClick={() => 
                // Funktionale Aktualisierung immer dann verwenden, wenn neuer Zustand abhängig vom Alten ist
                setData(data => {
                    console.log("Innerhalb des Buttons" + data);
                    return data +1;
                })
            }>Klick mich</button>
        </React.Fragment>
    )
}