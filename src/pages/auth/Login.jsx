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
        navigate('../home');
    }
    },[userData.isLoggedIn]);

  const handleLogin = () => {
    if(email.trim().toLowerCase() === userData.email.trim().toLowerCase() && password == userData.password) {
      setIsLoggedIn(true);
      navigate('../home');
    } else {
      alert("Invalid credentials!\nPlease try again.");
    }
  };
  return (
    <>
      <div className="bg-gray-700 text-gray-100 items-center  h-[81vh]">
            <h2>Login</h2>
            <input type="text" placeholder='Enter your email' value={email} onChange={(e) => {setEmail(e.target.value)}} required/><br /> <br />
            <input type="password" placeholder='Enter your password' value={password} onChange={(e) => {setPassword(e.target.value)}} required/><br /> <br />
            <p>{}</p>
            <button type="submit" onClick={() => handleLogin()}>Login</button>
            <p>Not registered yet? <Link to='/register' className='text-red-500'>Register now</Link></p>
        </div>
    </>
  )
}
