import React, { Component } from 'react';

class UsuarioSaida extends Component {

  render() {
    const divStyle = {
        background: 'lightgray',
        padding: '10px',
        border: '1px solid gray',
        margin: '100px',
      };
    return (
      <div style={divStyle}>
        <h2>Componente UsuarioSaida</h2>
        <p>Nome de Usuário: {this.props.nomeDeUsuario}</p>
        <p>Texto Qualquer: Qualquer texto que você desejar</p>
      </div>
    );
  }
}

export default UsuarioSaida;
