import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../hooks/useAuthStore';

export default function Home() {
    const navigate = useNavigate();
    const userData = useAuthStore();
    const { setIsLoggedIn } = useAuthStore();

    useEffect(() => {
        if (!userData.isLoggedIn) {
        navigate('../login');
    }
    },[userData.isLoggedIn]);

    const name = userData.name;
    const email = userData.email;

    const handleLogout = () => {
      setIsLoggedIn(false);
    }
  return (
    <>
    <h1>Profile</h1>
    <p>Hello, {name} 👋🏻<br />Your enrollment number is {email.toUpperCase()}</p>
    <button onClick={() => handleLogout()}>Logout</button>
    </>
  )
}
