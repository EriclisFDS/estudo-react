import React from "react";

export default function ComParametro(props) {
    const status = props.nota >= 7 ? ' e foi Aprovado' : ' e está de Recuperação'
    return( 
        <div>
                <h2>{ props.titulo }</h2>
                <p>
                    { props.aluno } 
                    <strong> tem nota </strong>
                    { props.nota } 
                    <strong>{ status }</strong> !
                </p>
        </div>
    );
}