//import ReactDOM from 'react-dom';

import React from 'react';
import { createRoot } from "react-dom/client";
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


//versao React 17
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );


//versao react 18 com const
// const container = document.getElementById('root');

// const root = createRoot(container);

// root.render(<App />);

//versao react 18 direto
createRoot(document.getElementById('root')).render(<App />);

