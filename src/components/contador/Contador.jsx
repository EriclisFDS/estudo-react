import React from "react";
import "./Contador.css";

export default class Contador extends React.Component {

    

    // constructor(props){
    //     super(props)

    //     // this.state = {
    //     //     numero: props.numeroInicial
    //     // }    

    //     this.inc = this.inc.bind(this)
    // }

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    // inc() {
    //     this.setState({
    //         numero: this.state.numero + 1
    //     });
    // }

    // render() {
    //     return(
    //         <div>
    //             <h2>Contador</h2>
    //             {/* <p>Valor Inicial: {this.props.numeroInicial} </p> */}
    //             <p> {this.state.numero} </p>
    //             <button onClick={ e => this.inc() } >+</button>
    //         </div>
    //     );
    // }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }

    setPasso = (e) => {
        this.setState({
            passo: +e.target.value
        })
    }

    render() {
        return(
            <div className="Contador">
                <h2>Contador</h2>
                {/* <p>Valor Inicial: {this.props.numeroInicial} </p> */}
                <p> {this.state.numero} </p>
                <div>
                    <label htmlFor="passoImput">Passo: </label>
                    <input id="passoImput" type="number" 
                        value={ this.state.passo } onChange={ this.setPasso } />
                </div>
                <button onClick={ this.dec } >-</button>
                <button onClick={ this.inc } >+</button>
            </div>
        );
    }



}