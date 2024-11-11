/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/login.css';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    if (username && password) {
      setIsLoggedIn(true);
      navigate('/');
    } else alert('Please enter your username and password');
  };

  const handleRegisterRedirect = () => navigate('/register');

  useEffect(() => {
    document.title = "Login | Little Lemon";
  })

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Login</button>
        <span className="toggle-link" onClick={handleRegisterRedirect}>
          Don&apos;t have an account? Register here
        </span>
      </form>
    </div>
  )
}

export default Login