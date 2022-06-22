import React from "react";



export default function IndiretaFilho(props){

    const [min, max] = [50, 70];
    const gerarIdade = () => parseInt(Math.random() * (max-min)) + min;
    const gerarNerd = () => Math.random() > 0.5;

    return(
        <div>
            <div>
                Filho
            </div>
            <button onClick={
                e => {
                    props.quandoClicar("João", gerarIdade(), gerarNerd);
                }
            }>Fornecer Informações</button>
        </div>
    );
}