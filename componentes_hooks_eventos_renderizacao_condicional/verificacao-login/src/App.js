import React, { useState } from 'react';
import './App.css';

function VerificacaoLogin() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <div>
      {isLogged ? (
        <div>
          <h1>Bem-vindo!</h1>
          <p>Você está autenticado. Aproveite sua experiência.</p>
          <button onClick={handleLogout}>Sair</button>
        </div>
      ) : (
        <div>
          <h1>Por favor, faça o login</h1>
          <p>Para acessar a área restrita, faça o login.</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <VerificacaoLogin />
      </header>
    </div>
  );
}

export default App;
