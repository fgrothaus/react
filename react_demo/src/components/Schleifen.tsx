//import React from "react"
import React, { useState, useEffect } from "react";

export function Schleifen() {


    const [zahl, setZahl] = useState(100); 
    const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Strawberry'];

    const mapResult = fruits.map((e, index) => <li key={index}>{e}</li>);


    return (
        <React.Fragment>
            
                    <div>
                        <h1>Fruit List</h1>
                        <ul>
                        {fruits.map((fruit, index) => (
                            <li key={index}>{fruit}</li>
                        ))}
                        </ul>
                        <ol>
                            {mapResult}
                        </ol>
                  </div>
                
            
        </React.Fragment>    
    )
}