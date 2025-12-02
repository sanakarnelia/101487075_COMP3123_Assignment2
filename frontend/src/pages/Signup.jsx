import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/axios';


export default function Signup() {
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [message, setMessage] = useState('');
const navigate = useNavigate();


const handleSubmit = async (e) => {
e.preventDefault();
try {
const res = await API.post('/user/signup', { username, email, password });
localStorage.setItem('token', res.data.token); 
navigate('/employees'); 
} catch (err) {
setMessage(err.response?.data?.message || 'Signup failed');
}
};


return (
<div className="card">
<h2>Signup</h2>
{message && <p>{message}</p>}
<form onSubmit={handleSubmit}>
<label>Username</label>
<input value={username} onChange={e => setUsername(e.target.value)} required />
<label>Email</label>
<input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
<label>Password</label>
<input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
<button type="submit" className="btn">Create Account</button>
</form>
</div>
);
}