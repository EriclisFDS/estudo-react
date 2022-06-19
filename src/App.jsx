import React from "react";

import "./App.css";

import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro';
import Fragmento from './components/basics/Fragmento';
import Aleatorio from './components/basics/Aleatorio';
import Card from "./components/layout/Card";
import Familia from "./components/basics/Familia";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import ListaAlunos from "./components/repetiçao/ListaAlunos";
import TabelaProdutos from "./components/repetiçao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";

export default function App(props) {
    return (
        <div className="App">
            <div className="Cards">
                <Card titulo="#1 Primeiro" color="#588C73">
                    <Primeiro />
                </Card>
                <Card titulo="#2 ComParametro" color="#E8B71A">
                    <ComParametro
                        titulo="Situaçao do Aluno"
                        aluno="Pedro Silva"
                        nota={9.3} />
                    <ComParametro
                        titulo="Situaçao do Aluno"
                        aluno="Maria"
                        nota={6} />
                </Card>
                <Card titulo="#3 Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>
                <Card titulo="#4 Desafio Aleatório" color="#FA6900">
                    <Aleatorio max_val={100} min_val={1} />
                </Card>
                <Card titulo="#5 Componente com Filhos" color="#00c8f8">
                    <Familia sobrenome="Silva" >
                        <FamiliaMembro nome="Pedro"  />
                        <FamiliaMembro nome="Ana"  />
                        <FamiliaMembro nome="Gustavo"  />
                    </Familia>
                </Card>
                <Card titulo="#6 - Repetição" color="#FF4C65">
                    <ListaAlunos />
                </Card>
                <Card titulo="#7 - Desafio Produtos" color="#3A9Ad9">
                    <TabelaProdutos />
                </Card>
                <Card titulo="#8 - Renderização Condicional" color="#982395">
                    <ParOuImpar numero={20} />
                    <UsuarioInfo usuario={{ nome:"Fernando" }} />
                    <UsuarioInfo usuario={{ email:"Fernando@hotmail.com" }} />
                </Card>
                
            </div>
        </div>
    );
}

//forma mais reduzida

//export default _ => 
//      <div id="app">
//        <Primeiro/>
//        <ComParametro 
//             titulo="Situaçao do Aluno" 
//             aluno="Pedro Silva" 
//             nota={9.3}/>
//        <ComParametro 
//             titulo="Situaçao do Aluno" 
//             aluno="Maria" 
//             nota={6}/>
//        <Fragmento />      
//      </div>