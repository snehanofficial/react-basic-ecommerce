import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../../hooks/useAuthStore';

export default function Login() {
  const navigate = useNavigate();
  const userData = useAuthStore();
  const { setIsLoggedIn } = useAuthStore();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(userData);

    useEffect(() => {
        if (userData.isLoggedIn) {
        navigate('../');
    }
    },[userData.isLoggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    if(email == userData.email && password == userData.password) {
      setIsLoggedIn(true);
      navigate('../home');
    } else {
      alert("Invalid credentials!\nPlease try again.");
    }
  };
  return (
    <>
      <form className="bg-gray-700 text-gray-100 items-center  h-[81vh]" onSubmit={handleLogin}>
            <h2>Login</h2>
            <input type="text" placeholder='Enter your email' value={email} onChange={(e) => {setEmail(e.target.value)}} required/><br /> <br />
            <input type="password" placeholder='Enter your password' value={password} onChange={(e) => {setPassword(e.target.value)}} required/><br /> <br />
            <p>{}</p>
            <button type="submit">Login</button>
            <p>Not registered yet? <Link to='/register' className='text-red-500'>Register now</Link></p>
        </form>
    </>
  )
}
