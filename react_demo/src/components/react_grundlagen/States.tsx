import React, {useState} from 'react';

export function States() {

    // Zustandsänderungen müssen immer über React erfolgen!
    const [count, setCount] = useState(0);

    // useState ist eigentlich nur für einfache Zustände gedacht. useReducer ist für komplexere, wie Objekte etc.
    const [data, setData] = useState(
        {
            vorname: "Felix",
            nachname: "Grothaus"
        }
    );

    const changeData = () => {
        setData( {...data, nachname: "Klausmaus"} ); // Spread Operator (...) wird verwendet, um eine flache Kopie des states zu kriegen
        // So wird die Seite neu gerendert
    };

    const changeInvisibleData = () => {
        data.vorname = "Hans"; // Änderung wird gespeichert, aber es wird nicht gerendert
        setData(data);
    }

    // Man kann auch ein Array in einem useState definieren
    const [arrayState, setArrayState] = useState(
        [
            10, 20, 30
        ]
    );

    const changeArrayValue = () => {
        const newArray = [...arrayState];
        newArray[2] = 100;
        setArrayState(newArray)
    };

    return (
        <React.Fragment>
            <p>Du hast mich {count} mal geklickt</p>
            <button onClick={() => setCount(count +1)}>COUNT</button>
            <button onClick={changeData}>Es wird gerendert</button>
            {/* So werden Änderungen zwar übernommen, aber die Seite wird nicht neu gerendert, da der Spread Operator ... nicht genutzt wurde */}
            <button onClick={changeInvisibleData}>Es wird nicht gerendert</button>
            <p>{data.vorname} {data.nachname}</p>
            <button onClick={changeArrayValue}>Change Array Value</button>
            <p>{arrayState[2]}</p>
        </React.Fragment>
    )
}