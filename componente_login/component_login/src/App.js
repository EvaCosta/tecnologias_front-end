






import React, { Component } from 'react';
import './App.css';
import UsuarioEntrada from './UsuarioEntrada';
import UsuarioSaida from './UsuarioSaida';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeDeUsuario: '',
    };
  }

  handleNomeDeUsuarioMudou = (novoNomeDeUsuario) => {
    this.setState({ nomeDeUsuario: novoNomeDeUsuario });
  };

  render() {

    return (
      <div className="App">
        <h1>Meu Projeto React</h1>
        <UsuarioEntrada onNomeDeUsuarioMudou={this.handleNomeDeUsuarioMudou} />
        <UsuarioSaida nomeDeUsuario="via_props" />
        <UsuarioSaida nomeDeUsuario={this.state.nomeDeUsuario} />
      </div>
    );
  }
}

export default App;
