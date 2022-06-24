import React from "react";
import { useState } from "react";
import "./Mega.css"

export default function Mega(props){
    
function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() *((max + 1) - min)) + min;
    return array.includes(aleatorio) ? 
    gerarNumeroNaoContido(min, max, array) : aleatorio;
}

function gerarNumeros(quant) {
    const numeros = Array(quant).fill(0).reduce((nums) => {
        const novoNumero = gerarNumeroNaoContido(1, 60, nums);
        return [ ...nums, novoNumero ] 
    }, []).sort((n1, n2) => n1 - n2);

    return numeros;
}

const [quant, setQuant] = useState(props.quant || 6);
const numerosIniciais = Array(quant).fill(0);
const [numeros, setNumeros] = useState( numerosIniciais );

console.log(gerarNumeros(7));
    
    return(
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{ numeros.join(", ") }</h3>
            <div>
                <label htmlFor="quantDeNum">Quantidade de Números </label>
                <input 
                    min="6"
                    max="15"
                    id="quantDeNum" 
                    type="number" 
                    value={ quant }
                    onChange={ e=> setQuant(+e.target.value) } />
            </div>
            <button onClick={e => setNumeros( gerarNumeros( quant ) ) } >Gerar Números</button>
        </div>
    );
}

