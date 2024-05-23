import React, { useState, useEffect, useRef } from 'react';
import '../styles/Login.css';
import Home from './Home'; // Utiliza './Home' si el archivo está en la misma carpeta que el componente Login
// Utiliza '../Home' si el archivo está en una carpeta anterior a la del componente Login



function Login({ onClose, position }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loginRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para verificar las credenciales
    // Por ahora, simplemente comprobaremos si el usuario y la contraseña son "admin"
    if (username === 'admin' && password === 'admin') {
      // Si las credenciales son correctas, redirige al componente Home
      window.location.href = '/Home';
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const handleClickOutside = (e) => {
    if (loginRef.current && !loginRef.current.contains(e.target)) {
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
    <div className="login-background">
      <div ref={loginRef} className="login-form">
        <form onSubmit={handleSubmit}>
          <label>
            Usuario:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Contraseña:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit">Aceptar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;





