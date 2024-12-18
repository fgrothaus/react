import React, { useEffect, useState } from 'react';

export function UseEffect() {

    const [data, setData] = useState(5);
    const [data2, setData2] = useState(5);
    // Ein useEffect-Hook wird immer asynchron ausgeführt, NACHDEM eine Komponente gerendert wurde
    // Er bekommt als Parameter NUR eine Funktion übergeben
    // Wird häufig für API-Aufrufe im Backend genutzt, wegen asynchronität. Der User muss dann nicht erst auf eine Antwort warten aus dem Backend, bis er weitermachen kann
    useEffect(() => {
        setData(10); // Wird dann erst nach dem initialen Rendern ausgeführt
    }, [data, data2]); // man kann entweder keine Abhängigkeit, leere Abhängigkeit [] oder Abhängigkeit [data] übergeben
    // []               -> useEffect wird nur beim initialen Rendern ausgeführt
    // leer             -> nach jedem Rendern ausführen
    // [data]           -> nach jeder Änderung der Abhängigkeit
    // [data, data2]    -> nach jeder Änderung einer Abhängigkeit


    // useEffect-Hook liefert - weil er asynchron ist - NIE ein Ergebnis zurück (return), sondern ist nur dafür da, um Code auszuführen
    // Deswegen müssen Änderungen auf einer Seite dann innerhalb des useEffects durch setUseStates gemacht werden

    return (
        <React.Fragment>
            <button onClick={() => {setData(200)}}>data</button>
            <button onClick={() => {setData(30000000)}}>data2</button>
            <p>{data}</p>
        </React.Fragment>
    );
}

    // WICHTIG::: Beim Verwenden von useEffect sind die Daten erst beim zweiten Rendern vorhanden. Damit muss man umgehen können im Quelltext!