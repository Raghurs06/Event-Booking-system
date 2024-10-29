import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; 

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); 

  const handleLogin = (e) => {
    e.preventDefault();  
    const mockUser = {
      username: 'user',
      password: 'password',
    };

    if (username === mockUser.username && password === mockUser.password) {
      login(username); 
      navigate('/'); 
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form style={{width: "300px", marginLeft: "550px", marginTop: "120px"}} onSubmit={handleLogin}>
       <div className="mb-3 shadow p-3 mb-5 bg-body-tertiary rounded">
            <h1>Login</h1>
           <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
           <input type="text" className="form-control" id="exampleInputEmail1"  value={username}  onChange={(e) => setUsername(e.target.value)} 
            required/>
           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

         <div className="mb-3">
           <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} 
          required />
         </div>
         <button type="submit" className="btn btn-primary">Login</button>
         
         </div>
       </form>
      
    </div>
  );
};

export default LoginPage;
