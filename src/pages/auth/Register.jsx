import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../../hooks/useAuthStore';

export default function Register() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useAuthStore();

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!email || !name || !password) {
            alert("Please fill all fields!");
        } else {
            // const user = {email, name, password};
            setUser({email, name, password});
            alert("Signed up successfully!\nPlease login to continue.");
            navigate('/login');
        }
    };
  return (
    <>
        <div className="bg-gray-700 border text-gray-100 border-gray-900 p-4 h-[81vh]">
            <h2>Register now</h2>
            <input type="email" id='name' placeholder='Enter your email' value={email} onChange={(e) => {setEmail(e.target.value)}} required/><br /> <br />
            <label htmlFor="name">Name:</label><br />
            <input type="text" placeholder='Enter your name' value={name} onChange={(e) => {setName(e.target.value)}} required/><br /> <br />
            <input type="password" placeholder='Enter your password' value={password} onChange={(e) => {setPassword(e.target.value)}} required/><br /> <br />
            <button type="submit" onClick={() => handleSubmit()}>Sign Up</button>
            <p>Already registered? <Link to='/login' className='text-green-500'>Login now</Link></p>
        </div>
    </>
  )
}
