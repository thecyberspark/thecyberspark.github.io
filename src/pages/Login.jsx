import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


const EMAILS = ['eyemusharraffaijaz@gmail.com', 'user2@example.com', 'user3@example.com'];

function LoginPanel() {
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault(); 

    if (!EMAILS.includes(email)) {
      setErrorMessage('Invalid email address. Please try again.');
    }
    console.log('Login successful!');
    setErrorMessage('Valid email address. Login successful!');
    <BrowserRouter> 
      <Route path="/" element={<Navigate to="/login" replace />} />
    </BrowserRouter>
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label >Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
}

export default LoginPanel;
