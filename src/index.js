import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';

import App from './App';

//const el = document.getElementById('root');
//ReactDOM.render('ola',el);

//ReactDOM.render(
//   <div id="app">
//        <Primeiro/>
//        <ComParametro 
//            titulo="Situaçao do Aluno" 
//            aluno="Pedro Silva" 
//            nota={9.3}/>
//        <ComParametro 
//            titulo="Situaçao do Aluno" 
//            aluno="Maria" 
//            nota={6}/>
//        <Fragmento />
//    </div>,
//    document.getElementById('root')
//);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);