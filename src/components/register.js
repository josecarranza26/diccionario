import React, { useState, useEffect, useRef } from 'react';
import '../styles/Register.css';

function Register({ onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const registerRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para registrar al usuario con los datos proporcionados
    // Por ahora, simplemente mostraremos los datos en la consola
    console.log('Usuario registrado:', { username, password });
    // Cerramos el formulario después de registrar
    onClose();
  };

  const handleClickOutside = (e) => {
    if (registerRef.current && !registerRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="register-background">
      <div ref={registerRef} className="register-form">
        <form onSubmit={handleSubmit}>
          <label>
            Usuario:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Contraseña:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
