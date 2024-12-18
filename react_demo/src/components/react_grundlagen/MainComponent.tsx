import React from "react";
import { Bedingtes_rendern, Bedingtes_rendern2 } from './JSX_bedingtes_rendern';
import { Events } from './Events';
import {States} from "./States";
import {Hooks} from "./Hooks";
import {Jsx_schleifen} from "./Jsx_schleifen";
import {Hooks_Arbeitsweise} from "./Hooks_Arbeitsweise";
import { States2 } from './States2';
import { UseEffect } from './UseEffect';
import { Formulare } from './Formulare';

export function MainComponent () {

    return (
        <React.Fragment>
            {/*NEW*/}
            {/* <States/> */}
            {/* <States2/> */}
            {/*<Hooks/>*/}
            <Jsx_schleifen/>
            {/*<Bedingtes_rendern2 />*/}
            {/*<Events />*/}
    
            {/* Komponenten sind unabhängig voneinander. Das heißt, useStates der gleichen Komponente sind ebenfalls unabhängig */}
            {/*<Hooks_Arbeitsweise />*/}
            {/*<Hooks_Arbeitsweise />*/}
            {/*<Hooks_Arbeitsweise />*/}
    
            {/* <UseEffect /> */}
            {/* <Formulare /> */}
        </React.Fragment>  
    );
}


