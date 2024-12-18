import React, { Fragment, useState } from 'react';

export function Formulare() {

    // Es gibt zwei Arten von Komponenten: 
    // Controlled:      React weiß bei jedem Tastendruck, was im Eingabefeld steht !! STANDARD !! So ist es vorgesehen, React zu nutzen
    // Uncontrolled:    React kennt den Zustand des Inhalts des Eingabefelds nicht !! NICHT STANDARD !! Durch Trigger (z.B. Klickevent)
    const [input, setInput] = useState<string>("");

    const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
        console.log(input);
    };

    console.log(input);
    
    return (
        <Fragment>
            <form >
                {/* Bei Controlled: type, value und onChange müssen im Feld vorhanden sein, um Zustände aktuell zu halten */}
                <input readOnly type="text" name="inputText" id="inputText" value={input} onChange={updateInput} />
                <button disabled type="submit">Console!</button>
            </form>
        </Fragment>
    );
}

