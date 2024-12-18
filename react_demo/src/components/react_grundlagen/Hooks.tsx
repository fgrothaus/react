import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';


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


    const navigate = useNavigate();


    return (
        <React.Fragment>
            <button onClick={() => {setSatz(satz+"nochmal")}}>moinzähler</button>
            {/* Nur für das Thema Routing (zu finden in App.tsx): useNavigate wird verwendet, um beispielsweise von Komponenten, die nicht in der Hauptleiste stehen,
            zu anderen Seiten zu navigieren */}
            <button onClick={() => navigate('/States')}>useNavigate from Hooks - Navigate to /States</button>
        </React.Fragment>
    )
}