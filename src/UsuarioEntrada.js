





import React, { Component } from 'react';

class UsuarioEntrada extends Component {
  handleChange = (e) => {
    const novoNomeDeUsuario = e.target.value;
    this.props.onNomeDeUsuarioMudou(novoNomeDeUsuario);
  };

  render() {
    return (
      <div>
        <h2>Componente UsuarioEntrada</h2>
        <input
          type="text"
          placeholder="Digite seu nome de usuário"
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default UsuarioEntrada;
