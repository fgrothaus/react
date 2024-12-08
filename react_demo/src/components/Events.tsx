import React, {useEffect, useState} from "react";

export function Events (props: EventProps) {

    const [value, setValue] = useState(0);


    const addNumber = (num: number) => { setValue( value + num) };

    return (
    <React.Fragment>
        <button onClick={() => {
            console.log("moin");}}
        >
            Klick
        </button>
        <button onClick={() => {addNumber(19);}}>Show Number</button>
        <span>{value}</span>
    </React.Fragment>
    )
}
// Keine Ahnung, wofür das war (EventProps)
interface EventProps {
    onClick?: (count: number) => void
}