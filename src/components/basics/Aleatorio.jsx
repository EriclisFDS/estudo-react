import React from "react";

export default function Aleatorio(props) {
    const valor = Math.round((Math.random() * (props.max_val - props.min_val) + props.min_val));
    
    return (
        <>
            <h2>Desafio</h2>
            <p>valor aleatorio: {valor}</p>
        </>
    );
}

//desestruturaçao

//const { max_val, min_val } = props;

//const [a, b] = [1, 2];

//const {c, d, x, y} = {c: 12, d: 45, x: 'teste'};