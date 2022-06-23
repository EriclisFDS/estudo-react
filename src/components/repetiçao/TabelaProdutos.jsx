import React from "react";

import { produtos } from "../../data/produtos";
import "./TabelaProdutos.css";

export default function TabelaProdutos(props){
    const produtosLi = produtos.map((produto, i) =>{
        return (
            <tr key={ produto.id } className={i % 2 === 0 ? "Par" : "Impar"}>
                <td>
                    {produto.id}
                </td>
                <td>
                    {produto.nome}
                </td>
                <td>
                    R$ { produto.preço.toFixed(2).replace(".", ",")  }
                </td>
            </tr>
        );
    })
    
    return(
        <div className="TabelaProdutos">
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtosLi}
                </tbody>
                
            </table>
        </div>
    );
}