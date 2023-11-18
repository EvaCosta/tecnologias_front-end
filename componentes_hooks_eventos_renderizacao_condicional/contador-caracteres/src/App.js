import React, { useState } from 'react';
import './App.css';

function ContadorCaracteres() {
  const [texto, setTexto] = useState('');

  const handleChange = (event) => {
    setTexto(event.target.value);
  };

  return (
    <div>
      <input type="text" value={texto} onChange={handleChange} />
      <p>Total de caracteres: {texto.length}</p>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contador de Caracteres</h1>
        <ContadorCaracteres />
      </header>
    </div>
  );
}

export default App;
