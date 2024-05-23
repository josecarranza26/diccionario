import React, { useState } from 'react';
import Dicionary from "./components/Dicionary";
import './App.css';
import Login from './components/login';
import Register from './components/register';

function App() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [loginButtonPosition, setLoginButtonPosition] = useState({ x: 0, y: 0 });
  const [registerButtonPosition, setRegisterButtonPosition] = useState({ x: 0, y: 0 });

  const handleLogin = (event) => {
    const buttonPosition = event.target.getBoundingClientRect();
    setLoginButtonPosition({ x: buttonPosition.left, y: buttonPosition.bottom });
    setShowLoginForm(true);
  };

  const handleRegister = (event) => {
    const buttonPosition = event.target.getBoundingClientRect();
    setRegisterButtonPosition({ x: buttonPosition.left, y: buttonPosition.bottom });
    setShowRegisterForm(true);
  };

  const handleLoginClose = () => {
    setShowLoginForm(false);
  };

  const handleRegisterClose = () => {
    setShowRegisterForm(false);
  };

  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="heading">Diccionario</h1>
          <div className="header-buttons">
            <button className="login-button" onClick={handleLogin}>Iniciar Sesión</button>
            <button className="register-button" onClick={handleRegister}>Registrar</button>
          </div>
        </header>
        <main>
          <Dicionary defaultKeyword="aesthetic" />
          {showLoginForm && <Login onClose={handleLoginClose} position={loginButtonPosition} />}
          {showRegisterForm && <Register onClose={handleRegisterClose} position={registerButtonPosition} />}
        </main>
        <footer className="mt-5 footer">
          <p className="m-0 credit">
            Grupo 2
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;




