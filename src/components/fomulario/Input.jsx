import React from "react";
import { useState } from "react";
import "./input.css";

export default function Input(props){
    
    const [valor, setValor] = useState("inicial");

    function quandoMudar(e) {
        
        setValor(e.target.value);
    }

    return (
        <div className="Input" >
            <h2>{ valor }</h2>
            <div style={{ display:"flex", flexDirection: "column"}}>
                <input type="text" value={ valor } onChange={ quandoMudar } />
                <input type="text" value={ valor } readOnly />
                
                {/* nao controlado */}
                <input type="text" value={ undefined } />
            </div>
        </div>
    );
}